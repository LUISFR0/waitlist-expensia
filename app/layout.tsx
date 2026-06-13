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
  title: "EXPENSIA — Finanzas inteligentes para México",
  description: "Escanea tickets, detecta deducciones fiscales y entiende a dónde va tu dinero. Únete a la lista de espera y obtén 3 meses Premium gratis.",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'EXPENSIA — Finanzas inteligentes para México',
    description: 'Escanea tickets, detecta deducciones fiscales y obtén análisis IA de tus finanzas. Regístrate y obtén 3 meses Premium gratis.',
    locale: 'es_MX',
    images: [{ url: '/logo.png' }],
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
