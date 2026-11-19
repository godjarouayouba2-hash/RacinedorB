import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RACINES D’OR GROUP — Se relever. Grandir. Rayonner.",
  description: "RACINES D’OR GROUP : une marque en croissance, engagée à proposer des essentiels choisis avec soin.",
  openGraph: {
    title: "RACINES D’OR GROUP — Se relever. Grandir. Rayonner.",
    description: "Se relever. Grandir. Rayonner.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
