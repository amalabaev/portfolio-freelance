import { Document, siteMetadata } from "../Document";

export const metadata = siteMetadata;

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <Document locale="fr">{children}</Document>;
}
