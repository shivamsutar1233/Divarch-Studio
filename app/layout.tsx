import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://div-arch.in";
const OG_IMAGE =
  "https://ab2bbkrtuubturud.public.blob.vercel-storage.com/product_images/1766407610876-nuodgt5-Div-Arch.in%20Brand%20Identity-1.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Div-Arch Studio — 3D Printing for Modern Architecture",
    template: "%s | Div-Arch Studio",
  },
  description:
    "Revolutionary 3D printing solutions for architectural models, prototypes, and functional components with precision and innovation. Based in Akluj, Solapur, India.",
  keywords: [
    "3D printing",
    "architecture",
    "prototyping",
    "Div-Arch Studio",
    "architectural models",
    "custom 3D printing",
    "rapid prototyping",
    "3D printed products",
    "Akluj",
    "Solapur",
    "India",
    "STL printing",
    "keychains",
    "miniatures",
  ],
  authors: [{ name: "Div-Arch Studio", url: SITE_URL }],
  creator: "Div-Arch Studio",
  publisher: "Div-Arch Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Div-Arch Studio",
    title: "Div-Arch Studio — 3D Printing for Modern Architecture",
    description:
      "Revolutionary 3D printing solutions for architectural models, prototypes, and functional components.",
    images: [
      {
        url: OG_IMAGE,
        width: 800,
        height: 800,
        alt: "Div-Arch Studio — 3D Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Div-Arch Studio — 3D Printing for Modern Architecture",
    description:
      "Revolutionary 3D printing solutions for architectural models, prototypes, and functional components.",
    images: [OG_IMAGE],
    creator: "@divarch_studio",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  verification: {
    // google: "your-google-site-verification-code", // add after Search Console setup
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <JsonLd />
        <ThemeProvider>
          <Header />
          <main className="flex-1 container mx-auto px-4 py-10 mt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
