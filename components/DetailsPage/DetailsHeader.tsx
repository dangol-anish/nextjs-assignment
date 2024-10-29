import Link from 'next/link'
import React from 'react'
import GoBack from "../../public/back-icon.svg"
import Image from 'next/image'

const DetailsHeader = () => {
  return (
    <div className="h-[10%] w-full flex justify-between  text-white/70  ">
    <Link href="/" className='bg-default_state w-[25%] md:w-[15%] h-[50%]  rounded-md flex justify-center items-center gap-2 border border-border_color hover:bg-hover_state'>
    <Image src={GoBack} alt="go-back-icon"/> <p className='text-sm'>Go back</p>
    </Link>

  </div>
  )
}

export default DetailsHeader