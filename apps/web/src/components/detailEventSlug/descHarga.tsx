"use client"

import React, { useState } from 'react'
import DeskripsiDetailEvent from './deskripsiDetailEvent'
import BuyTiket from './buyTiket'
import Button from '../button'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";

export const DescHarga = () => {
    const [isActive, setIsActive] = useState(false)

    const handleActive = () => {
        setIsActive(!isActive)
    }

    return (
        <section className='pt-10 flex justify-between'>

            <main className='w-full lg:w-[720px] flex flex-wrap items-center'>
                <div onClick={handleActive} className='w-1/2 relative'>
                    <button disabled={!isActive} type='submit' className={`text-center ${isActive ? 'font-normal' : 'font-bold'} h-10 border-b w-full border-gray-400 `}>DESKRIPSI</button>
                    <span className={`w-full ${isActive ? 'h-0 ' : 'h-1'}  bg-blue-700 absolute left-0 bottom-0 rounded-t-lg`}></span>
                </div>
                <div onClick={handleActive} className='w-1/2 relative'>
                    <button disabled={isActive} type='submit' className={`text-center ${isActive ? 'font-bold' : 'font-normal'} h-10 border-b w-full relative border-gray-400 `}>TIKET</button>
                    <span className={`w-full ${isActive ? 'h-1' : 'h-0'} bg-blue-700 absolute left-0 bottom-0 rounded-t-lg`}></span>
                </div>

                {isActive ?
                    <div className=' w-full flex flex-col gap-6 my-10 px-5 lg:px-0'>
                        <Link href={'/buytiket'} className='text-white'>
                            <Button props='Beli  Tiket' />
                        </Link>
                        <BuyTiket />
                    </div>

                    :

                    <div className='w-full my-10 px-5 md:px-0'>
                        <DeskripsiDetailEvent />
                    </div>
                }
            </main>

            <main className='lg:w-[360px] hidden lg:flex lg:flex-col gap-5'>
                <p className='text-sm text-gray-800'>Bagikan event</p>

                <div className='flex gap-5'>
                    <Link href={'https://www.facebook.com/'} target='_blank'>
                        <div className='border border-black p-2 rounded-full'>
                            <FaFacebookF className='w-5 h-5' />
                        </div>
                    </Link>

                    <Link href={'https://x.com/'} target='_blank'>
                        <div className='border border-black p-2 rounded-full'>
                            <FaXTwitter className='w-5 h-5' />
                        </div>
                    </Link>

                    <Link href={''}>
                        <div className='border border-black p-2 rounded-full'>
                            <IoMdShare className='w-5 h-5' />
                        </div>
                    </Link>
                </div>
            </main>


        </section>
    )
}