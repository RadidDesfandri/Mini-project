import PosterDate from '@/components/detailEventSlug/PosterDate'
import NavTop from '@/components/navTop'
import { NavTopMobile } from '@/components/navTopMobile'
import React from 'react'

export default function page() {
  return (
    <div className='bg-blue-950'>
      <NavTop />
      <NavTopMobile />
      <PosterDate />
    </div>
  )
}