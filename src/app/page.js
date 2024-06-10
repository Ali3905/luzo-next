
import SalonCrousal from './Home/SalonCrousal'
import PopularSalonsCrousal from './Home/PopularSalonsCrousal'
import Discount from './Home/Discount'
import Trust from './Home/Trust'
import Testimonial from './Home/Testimonial'
import HeaderCrousal from './Home/HeaderCrousal'
import Banner from './Home/Banner'
import HowToUse from './Home/HowToUse'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div >
      <Navbar />
      <HeaderCrousal />
      <SalonCrousal />
      <Discount />
      <HowToUse />
      <PopularSalonsCrousal />
      <Trust />
      <Testimonial />
      <Banner />
      <Footer />

      <div className={`bg-black w-full fixed bottom-[1%] z-20 text-white flex items-center justify-between gap-[2px] py-4 px-2 ${true?"visible":"invisible"} transition sm:hidden`}>
        {/* <button onClick={()=>setShowDownload(false)}><X/></button> */}
        <img src="/img/icon.webp" alt="logo" className='w-[20px] aspect-square' />
        <p className='whitespace-nowrap text-[13px]'>Download and book the luzo</p>
        <button className='bg-blue-300 rounded-md p-2'><Link href={"/loading"}>DownLoad</Link></button>
      </div>
    </div>
  )
}

export default Home