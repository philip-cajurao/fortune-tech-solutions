import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ThemeProvider from "./components/ThemeProvider";
import { Inter } from 'next/font/google'
import "./globals.css";

export const metadata = {
  title: "Fortune Tech Solutions",
  description: "We help businesses to success by using modern tools for a faster and efficient way to work, brought to you by the experts in the industry.",
  metadataBase: new URL("https://fortune-tech-solutions.vercel.app/"),
  openGraph: {
    title: "Fortune Tech Solutions",
    description:
      "We help businesses to success by using modern tools for a faster and efficient way to work, brought to you by the experts in the industry.",
    url: "https://fortune-tech-solutions.vercel.app/",
    siteName: "Fortune Tech Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fortune Tech Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`antialiased ${inter.className}`}
      >
        <ThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
