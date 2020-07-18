import React, { useState } from 'react'

import PriceTable from '../PriceTable'

const Calc = () => {
    const [result, setResult] = useState([{ plan: 'FaleMais 120', orig: '017', dest: '011', time: '2 Horas', price: 0 }])
    const [params, setParams] = useState({
        origin: 11,
        dest: 11,
        time: 0
    })

    const handleChange = e => {
        const { name, value } = e.target
        setParams({ ...result, [name]: value })
    }

    return (
        <section id="calculadora" className="text-gray-700 body-font bg-gray-400">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Calculadora</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Quer saber quanto será sua economia? Veja na Calculadora <strong>FaleMais</strong> e se surpreenda!</p>
                </div>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 justify-around text-center">
                    <div className="relative">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="origin">
                            Origem
                        </label>
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="origin"
                            name="origin"
                            onChange={handleChange}
                        >
                            <option value='11'>(011) - São Paulo</option>
                            <option value='16'>(016) - São Paulo</option>
                            <option value='17'>(017) - São Paulo</option>
                            <option value='18'>(018) - São Paulo</option>
                        </select>
                    </div>
                    <div className="relative">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="dest">
                            Destino
                        </label>
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="dest"
                            name="dest"
                            onChange={handleChange}
                        >
                            <option value='11'>(011) - São Paulo</option>
                            <option value='16'>(016) - São Paulo</option>
                            <option value='17'>(017) - São Paulo</option>
                            <option value='18'>(018) - São Paulo</option>
                        </select>
                    </div>
                    <div className="relative">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="time">
                            Tempo de Ligação <small>(em Minutos)</small>
                        </label>
                        <input
                            className="block appearance-none text-lg w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Ex: 60 para 1 Hora"
                            type="number"
                            id="time"
                            name="time"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* <PriceTable data={result} /> */}
                {
                    JSON.stringify(params)
                }
            </div>
        </section>
    )
}

export default Calc