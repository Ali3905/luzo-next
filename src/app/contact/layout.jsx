import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL('https://www.luzo.app'),

    title: 'Contact Us | LUZO',
    description: 'Contact Us | LUZO',
}

export default function ContactLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      {/* <Footer /> */}
    </html>
  );
}
