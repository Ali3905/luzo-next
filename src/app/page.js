
import SalonCrousal from './Home/SalonCrousal'
import PopularSalonsCrousal from './Home/PopularSalonsCrousal'
import Discount from './Home/Discount'
import Trust from './Home/Trust'
import Testimonial from './Home/Testimonial'
import HeaderCrousal from './Home/HeaderCrousal'
import Banner from './Home/Banner'
import HowToUse from './Home/HowToUse'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DownloadPopUp from '@/components/DownloadPopUp'

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

      <DownloadPopUp  />
    </div>
  )
}

export default Home