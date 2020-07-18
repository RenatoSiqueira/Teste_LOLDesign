import React from 'react'

const CTA = () => (
    <section className="text-gray-700 body-font bg-gray-400">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Quero Assinar Agora!</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Receba mais informações diretamente em seu email e conheça todas as vantagens do plano <strong>FaleMais</strong>.</p>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
                <input className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0" placeholder="Seu Nome" type="text" />
                <input className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0" placeholder="Email" type="email" />
                <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Receber</button>
            </div>
        </div>
    </section>
)

export default CTA