import React from 'react'
import { Helmet } from 'react-helmet'
import './styles.css'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Calc from '../components/Calc'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const mockTableItems = [
    { plan: 'Normal', orig: '011', dest: '016', time: '1 Min', price: 1.90 },
    { plan: 'FaleMais', orig: '011', dest: '016', time: '1 Min', price: 0 },
    { plan: 'Normal', orig: '016', dest: '011', time: '30 Min', price: 87 },
    { plan: 'FaleMais 30', orig: '016', dest: '011', time: '30 Min', price: 0 },
    { plan: 'Normal', orig: '018', dest: '011', time: '1 Hora', price: 61.9 },
    { plan: 'FaleMais 60', orig: '018', dest: '011', time: '1 Hora', price: 0 },
    { plan: 'Normal', orig: '017', dest: '011', time: '2 Horas', price: 324 },
    { plan: 'FaleMais 120', orig: '017', dest: '011', time: '2 Horas', price: 0 },
]

const Index = () => (
    <div className="font-sans leading-normal tracking-normal">
        <Helmet>
            <title>FaleMais, Fale muuuuuuito mais!</title>
        </Helmet>
        <Header />
        <Hero />
        <Calc />
        <Pricing data={mockTableItems} />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
    </div>
)

export default Index