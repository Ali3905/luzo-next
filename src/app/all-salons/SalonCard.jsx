import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SalonCard = ({ salon }) => {
    return (
        <Link href={salon.link} className={"sm:w-[32%] w-[95%]"}>
            <div className='flex flex-col gap-[20px]  relative rounded-xl overflow-hidden  '>
                <Image src={salon.image} alt='salon' width={300} height={200} className='aspect-video w-full transform hover:scale-110 transition duration-300 ease-in-out' />
                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>{salon.name}</h1>
            </div>
        </Link>
    )
}

export default SalonCard