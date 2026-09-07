import { Document, siteMetadata } from "../Document";

export const metadata = { ...siteMetadata, title: "Freelance web developer — websites & applications | Aliaskar Malabaev" };

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <Document locale="en">{children}</Document>;
}
