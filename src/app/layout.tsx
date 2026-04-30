import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/LanguageContext";

export const metadata: Metadata = {
  title: "HoneyVerse Indonesia - Mengenal Madu Nusantara",
  description: "Eksplorasi ragam madu asli Indonesia, lebah penghasilnya, dan fakta mengagumkan di balik setiap tetesan manisnya.",
};

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
