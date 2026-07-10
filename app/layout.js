import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Farhan Nur Iman | Portfolio",
  description: "Translating complex, multi-million record datasets into interactive business intelligence solutions while capturing precision through the lens.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-on-background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
