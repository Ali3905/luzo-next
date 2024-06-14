import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

    function transformString(str, withAmpersand) {
        // Replace "-" with a space
        let transformedStr = str.replace(/-/g, ' ');

        if (withAmpersand) {
          // Replace "and" with "&"
          transformedStr = transformedStr.replace(/\band\b/g, '&');
        }

        // Capitalize the first letter of each word
        transformedStr = transformedStr.replace(/\b\w/g, char => char.toUpperCase());

        return transformedStr;
    }

export async function generateMetadata({ params }) {
  // read route params
  const title = params.title
 
  return {
    metadataBase: new URL('https://www.luzo.app'),
        
    title: `${transformString(title, true)} Salon | LUZO`,
    description: `Book your salon appointment at ${transformString(title, false)} and avail 40% OFF exclusively on LUZO. Check out 200+ salon and spa offers near you via LUZO.`,
  }
}

export default function SalonLayout({ children, params }) {
   
  

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
