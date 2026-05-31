import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EXPENSIA — Control financiero inteligente",
  description: "La app para rastrear gastos, escanear tickets y calcular deducciones fiscales. Únete a la lista de espera.",
  openGraph: {
    title: 'EXPENSIA — Control financiero inteligente',
    description: 'Tus gastos, bajo control. Sin esfuerzo. Únete a la lista de espera.',
    locale: 'es_MX',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
