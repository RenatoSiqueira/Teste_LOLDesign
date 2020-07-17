import React from 'react'
import './styles.css'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Table from '../components/Table'
import Calc from '../components/Calc'
import CTA from '../components/CTA'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Index = () => (
    <div className="bg-gray-400 font-sans leading-normal tracking-normal">
        <Header />
        <Hero />
        <Table />
        <Calc />
        <CTA />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
)

export default Index