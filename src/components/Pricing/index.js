import React from 'react'

import PriceTable from '../PriceTable'

const Pricing = ({ data }) => (
    <section id="comparativo" className="text-gray-700 body-font">
        <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Comparativo</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Veja todas as vantagens do <strong>FaleMais</strong> em relação aos outros planos.</p>
            </div>
            <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                <PriceTable data={data} />
            </div>
            <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                <div className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">Veja Mais Detalhes
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </div>
                <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Receber</button>
            </div>
        </div>
    </section>
)

export default Pricing