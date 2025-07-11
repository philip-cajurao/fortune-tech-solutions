import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ThemeProvider from "./components/ThemeProvider";
import { Inter } from 'next/font/google'
import "./globals.css";
import SectionProvider from "./components/SectionProvider";

export const metadata = {
  title: {
    default: "Fortune Tech Solutions"
  },
  description: "We help businesses to success by using modern tools for a faster and efficient way to work, brought to you by the experts in the industry.",
  publisher: 'Phil Cajurao',
  metadataBase: new URL("https://fortune-tech-solutions.vercel.app"),


  openGraph: {
    title: "Fortune Tech Solutions",
    description:
      "We help businesses to success by using modern tools for a faster and efficient way to work, brought to you by the experts in the industry.",
    url: "https://fortune-tech-solutions.vercel.app",
    siteName: "Fortune Tech Solutions",
    images: [
      {
        url: "og-image.png",
        width: 1200,
        height: 630,
        alt: "Fortune Tech Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Fortune Tech Solutions',
    site: "fortunetechsolutions.net",
    description: 'We help businesses to success by using modern tools for a faster and efficient way to work, brought to you by the experts in the industry.',
    images: ['og-image.png'],
  },


  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "fts-light.png" },
      { url: 'fts-dark.png', media: '(prefers-color-scheme: dark)' }
    ]
  }
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`antialiased ${inter.className}`}
      >
        <ThemeProvider>
          <SectionProvider>
            <NavBar />
            {children}
            <Footer />
          </SectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
