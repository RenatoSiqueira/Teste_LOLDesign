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

const FixedValue = {
    '1116': 1.90,
    '1611': 2.90,
    '1117': 1.70,
    '1711': 2.70,
    '1118': 0.90,
    '1811': 1.90
}

const Plans = [
    {
        icon: 'statue-of-liberty.png',
        title: 'FaleMais 30',
        text: 'Muito mais liberdade para falar! O Plano FaleMais 30 lhe proporciona tranquilidade em ligações à distância.'
    },
    {
        icon: '25-de-abril-bridge.png',
        title: 'FaleMais 60',
        text: 'A ponte que faltava para comunicar com seus clientes ou filiais com muito mais comodidade. FaleMais 60 é o plano ideal para alavancar suas vendas.'
    },
    {
        icon: 'island-on-water.png',
        title: 'FaleMais 120',
        text: 'Tranquilidade total! O Fale Mais 120 garante conforto para ligações que necessitam de atenção diferenciada.'
    }
]

const Index = () => (
    <div className="font-sans leading-normal tracking-normal">
        <Helmet>
            <title>FaleMais, Fale muuuuuuito mais!</title>
        </Helmet>
        <Header />
        <Hero data={Plans} />
        <Calc data={FixedValue} />
        <Pricing data={mockTableItems} />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
    </div>
)

export default Index