import Image from "next/image"
import SalonCard from "./SalonCard"

const salons = [
  {
    name : "JCB (Jean-Claude Biguine )",
    image : "/SalonPhotos/JCB.webp",
    link : "/salon/jcb"
  
  },
  
  {
    name : "BBlunt",
    image : "/SalonPhotos/bblunt.webp",
    link : "/salon/bblunt"
  
  },
  {
    name : "Lemon",
    image : "/SalonPhotos/lemon.webp",
    link : "/salon/lemon"
  
  },
  {
    name : "Juice",
    image : "/SalonPhotos/juice,ghatkopar.webp",
    link : "/salon/juice"
  
  },
  {
    name : "Kprive",
    image : "/SalonPhotos/Kprive.webp",
    link : "/salon/kprive"
  
  },
  {
    name : "Fashion Tv",
    image : "/SalonPhotos/FTV.webp",
    link : "/salon/fashiontv"
  
  },
  {
    name : "Harsha & Rakesh",
    image : "/SalonPhotos/HarshaRakesh.webp",
    link : "/salon/harsha-and-rakesh"
  
  },
  {
    name : "The First",
    image : "/SalonPhotos/TattvaSpa.webp",
    link : "/salon/the-first"
  
  },
  {
    name : "BodyCraft",
    image : "/SalonPhotos/BodyCraft.webp",
    link : "/salon/bodycraft"
  
  },
  {
    name : "Harsha & Rakesh",
    image : "/SalonPhotos/HarshaRakesh.webp",
    link : "/salon/harsha-and-rakesh"
  
  },
  {
    name : "Toni & Guy",
    image : "/SalonPhotos/toninguy.webp",
    link : "/salon/toni-and-guy"
  
  },
  {
    name : "LookWell",
    image : "/SalonPhotos/LookWell.webp",
    link : "/salon/lookwell"
  
  },
  {
    name : "Femina Flaunt",
    image : "/SalonPhotos/feminaflaunt.webp",
    link : "/salon/femina-flaunt"
  
  },
  {
    name : "Tip & Toe",
    image : "/SalonPhotos/timntoe.webp",
    link : "/salon/tip-and-toe"
  
  },
  {
    name : "JCO (Jean Claude Olivier)",
    image : "/SalonPhotos/JCO.webp",
    link : "/salon/jco"
  
  },
  {
    name : "Tattva Spa",
    image : "/SalonPhotos/TattvaSpa.webp",
    link : "/salon/tattva"
  
  },
  {
    name : "Apple",
    image : "/SalonPhotos/Apple(The Original).webp",
    link : "/salon/apple"
  
  },
  {
    name : "CocoMelon",
    image : "/SalonPhotos/Apple(The Original).webp",
    link : "/salon/cocomelon"
  
  },
  {
    name : "House Of Bumble",
    image : "/SalonPhotos/HouseOfBumble.webp",
    link : "/salon/houseofbumble"
  
  },
]

const Salons = () => {
  return (
    <div className="px-[10px] sm:px-[120px] mt-[100px]">
      <h1 className="font-medium text-[30px]">All Salons</h1>
      <div className="flex flex-wrap   gap-[20px] cursor-pointer py-[20px]">
       {
        salons.map((salon, i)=>{
          return <SalonCard salon={salon} key={i} />
        })
       }

      </div>
      <h1 className="font-medium sm:text-[28px] text-[20px] text-center">To view more salons download the app now!</h1>
      <div className="flex items-center   justify-center gap-[20px] py-[20px]">
        <Image src="/img/appstore.webp" alt="img" width={150} height={60} />
        <Image src="/img/playstore.webp" alt="img" width={150} height={60} />
      </div>
    </div>
  )
}

export default Salons