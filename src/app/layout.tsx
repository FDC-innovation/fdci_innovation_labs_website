import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/data/site-config";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI community Uttarakhand",
    "cloud engineering",
    "full stack development",
    "Salesforce solutions",
    "AI training",
    "tech education India",
    "Fast Data Connect",
    "FDC Innovation Labs",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
        <div className="relative min-h-screen flex flex-col">
          {/* Background Effects */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-background" />
              <div className="absolute inset-0 grid-bg" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <Header />
          <main className="flex-1 pt-20 md:pt-28">{children}</main>
          <Footer />

          {/* Global Conversion Elements */}
          <WhatsAppFloat />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
