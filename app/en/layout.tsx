import { Document, siteMetadata } from "../Document";

export const metadata = { ...siteMetadata, title: "Freelance web, mobile and AI integration developer | Aliaskar Malabaev" };

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <Document locale="en">{children}</Document>;
}
