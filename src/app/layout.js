import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Fortune Tech Solutions",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`antialiased`}
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
