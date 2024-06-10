import Head from "next/head"
import BuyGiftcard from "./BuyGiftcard"
import Carousel from "./Carousel"
import HowToUse from "./HowToUse"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


const Giftcard = () => {


  <Head>
    <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        <script type="module" src="/src/main.jsx"></script>
        
      </head>
  </Head>

  return (
    <div>
      <Navbar />
      <Carousel />
      <BuyGiftcard />
      <HowToUse />
      <Footer />

    </div>
  )
}

export default Giftcard