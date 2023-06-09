import Image from 'next/image'
import Link from 'next/link'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'

import type { Metadata } from 'next'
import { AboutSection, BestPortfolio, BlogNews, CallToAction, Hero, ServicesSection, Skills, Testimonial, HeroExt } from '@/components/sections'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PraiseDev | Home',
  description: 'This is my portfolio website',
  icons: {
    icon: '/logo.png'
  }
}

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <HeroExt/>
      <AboutSection/>
      <ServicesSection/>
      <BestPortfolio/>
      <Testimonial/>
      <CallToAction/>
      <Skills/>
      <BlogNews/>
      <Footer/>
    </div>
  )
}
