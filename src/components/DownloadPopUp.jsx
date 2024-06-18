'use client'
import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


const DownloadPopUp = () => {
    
    const [showDownload, setShowDownload] = useState(true);


  return (
    <div className={`bg-black w-full fixed bottom-[0%] z-20 text-white flex items-center justify-between gap-[2px] py-4 px-2 ${showDownload?"visible":"invisible"} transition sm:hidden`}>
    <button onClick={()=>setShowDownload(false)}><X/></button>
    <Image src="/img/icon.webp" height={20} width={20} alt="logo" className='w-[30px] aspect-square' />
    <p className='whitespace-nowrap text-[13px]'>Download and book the luzo</p>
    <button className='popup_btn_gradient rounded-md p-2'><Link href={"/loading"}>DownLoad</Link></button>
  </div>
  )
}

export default DownloadPopUp