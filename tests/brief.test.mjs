import assert from 'node:assert/strict';
import test from 'node:test';
import { createBriefSender, normalizeWebsite } from '../app/lib/brief.ts';

const payload = { name: 'Local test', email: 'test@example.invalid', need: 'Test only, never transmitted' };
const success = () => new Response(JSON.stringify({ success: 'true' }), { status: 200 });

test('normalizes optional domains while rejecting unsafe schemes and embedded credentials', () => {
  assert.equal(normalizeWebsite(''), '');
  assert.equal(normalizeWebsite('  example.com/contact  '), 'https://example.com/contact');
  assert.equal(normalizeWebsite('https://example.com'), 'https://example.com/');
  assert.equal(normalizeWebsite('http://example.com'), 'http://example.com/');
  for (const input of ['javascript:alert(1)', 'mailto:test@example.com', 'https://u:p@example.com', 'not a website', 'https://']) {
    assert.throws(() => normalizeWebsite(input));
  }
});

test('sends one request while pending, and accepts an explicit success response', async () => {
  let complete;
  let requests = 0;
  const send = createBriefSender({ fetcher: async (_url, options) => {
    requests++;
    assert.equal(options.method, 'POST');
    assert.deepEqual(JSON.parse(options.body), payload);
    return new Promise(resolve => { complete = resolve; });
  }});
  const first = send(payload);
  await assert.rejects(send(payload), /already-submitting/);
  assert.equal(requests, 1);
  complete(success());
  await first;
});

test('rejects HTTP errors, malformed responses and unsuccessful payloads', async () => {
  for (const response of [new Response('failure', { status: 500 }), new Response('{}'), new Response('{"success":false}'), new Response('not json')]) {
    const send = createBriefSender({ fetcher: async () => response });
    await assert.rejects(send(payload));
  }
});

test('releases the lock after failure so an explicit retry can succeed', async () => {
  let calls = 0;
  const send = createBriefSender({ fetcher: async () => {
    if (++calls === 1) throw new Error('offline');
    return success();
  }});
  await assert.rejects(send(payload), /offline/);
  await send(payload);
  assert.equal(calls, 2);
});

test('bounds waiting time and aborts without automatically resending', async () => {
  let signal;
  let requests = 0;
  const send = createBriefSender({ timeoutMs: 15, fetcher: async (_url, options) => {
    signal = options.signal;
    requests++;
    return new Promise(() => {});
  }});
  await assert.rejects(send(payload), /confirmation-timeout/);
  assert.equal(signal.aborted, true);
  assert.equal(requests, 1);
});
