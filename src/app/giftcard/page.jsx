import Head from "next/head"
import BuyGiftcard from "./BuyGiftcard"
import Carousel from "./Carousel"
import HowToUse from "./HowToUse"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


const Giftcard = () => {


  

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