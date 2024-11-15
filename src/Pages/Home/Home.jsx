import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import BrandSection from '../../Components/BrandSection/BrandSection'
import FeaturesSection from '../../Components/FeaturesSection/FeaturesSection'
import WorkSection from '../../Components/WorkSection/WorkSection'
import CtaSection from '../../Components/CTASection/CtaSection'
import TestimonialSection from '../../Components/TestimonialSection/TestimonialSection'
import FaqSection from '../../Components/FAQSection/FaqSection'
import NewsLetterSection from '../../Components/NewsLetterSection/NewsLetterSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <BrandSection/>
      <FeaturesSection/>
      <WorkSection/>
      <CtaSection/>
      <TestimonialSection/>
      <FaqSection/>
      <NewsLetterSection/>
    </div>
  )
}

export default Home
