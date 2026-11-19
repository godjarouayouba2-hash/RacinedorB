import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RACINE D’OR — Le goût de la nature",
  description: "Découvrez les farines et céréales RACINE D’OR : farine de cossettes d’igname, farine pour enfants et flocons d’avoine.",
  openGraph: {
    title: "RACINE D’OR — Le goût de la nature",
    description: "Des essentiels alimentaires sélectionnés avec soin.",
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
