import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://www.luzo.app"),
  
    title: "Gift Card | LUZO",
    description: "Gift Card | LUZO",
  };

export default function GiftcardLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
