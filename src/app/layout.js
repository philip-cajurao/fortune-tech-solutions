import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ThemeProvider from "./components/ThemeProvider";
import { Inter } from 'next/font/google'
import "./globals.css";

export const metadata = {
  title: "Fortune Tech Solutions",
  description: "",
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
