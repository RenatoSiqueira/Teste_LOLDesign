import React from 'react'
import './styles.css'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Calc from '../components/Calc'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Index = () => (
    <div className="font-sans leading-normal tracking-normal">
        <Header />
        <Hero />
        <Calc />
        <Pricing />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
    </div>
)

export default Index