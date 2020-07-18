import React from 'react'

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

const Pricing = () => (
    <section className="text-gray-700 body-font">
        <div className="container px-5 py-18 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Comparativo</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Veja todas as vantagens do <strong>FaleMais</strong> em relação aos outros planos.</p>
            </div>
            <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                        <tr className='text-center'>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">Plano</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Origem</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Destino</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Tempo</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mockTableItems.map(each => (
                                <tr className={`text-center ${!each.price ? 'bg-gray-100' : ''}`}>
                                    <td className="px-4 py-3">{each.plan}</td>
                                    <td className="px-4 py-3">{each.orig}</td>
                                    <td className="px-4 py-3">{each.dest}</td>
                                    <td className="px-4 py-3">{each.time}</td>
                                    <td className={`px-4 py-3 text-gray-900 ${!each.price ? 'font-bold' : ''}`}>
                                        R$ {each.price.toFixed(2)}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
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