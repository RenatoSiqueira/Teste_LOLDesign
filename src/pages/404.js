import React from 'react'
import { Helmet } from 'react-helmet'
import './styles.css'

import Footer from '../components/Footer'

const Error404 = () => (
    <div className="font-sans leading-normal tracking-normal">
        <Helmet>
            <title>Página Não Encontrada</title>
        </Helmet>
        <section className="text-gray-700 body-font">
            <div className="container px-5 py-20 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Página Não Encontrada</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Conheça o novo <strong>FaleMais</strong> da Telzir. Você pode falar de graça até
                um determinado tempo (em minutos) e só paga os minutos excedentes.
                    </p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                <a href="/">
                    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ir Para Página Principal</button>
                </a>
            </div>
        </section>
        <Footer />
    </div>
)

export default Error404