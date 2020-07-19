import React, { useState, useEffect } from 'react'
import ResultTable from './resultTable'

const Calc = ({ data }) => {
    const [exists, setExists] = useState(true)
    const [result, setResult] = useState({})
    const [params, setParams] = useState({ origin: 11, dest: 16, time: 0, plan: 30 })

    const handleChange = e => {
        const { name, value } = e.target
        setParams({
            ...params,
            [name]: (!!value && value > -1) ? parseInt(value) : 0
        })
    }

    const CostCalc = () => {
        const { origin, dest, time, plan } = params
        const index = origin + dest.toString()
        const price = data[index]

        if (!price) {
            setExists(false)
            return
        }

        const priceWithout = (price * time).toFixed(2)
        let priceWith = 0
        let savings = priceWithout

        if (time > plan) {
            const surplus = time - plan
            const extraCost = price + (price * 10 / 100)
            priceWith = (surplus * extraCost).toFixed(2)
            savings = (priceWithout - priceWith).toFixed(2)
        }

        setResult({ ...params, priceWith, priceWithout, savings })
        setExists(true)
    }

    useEffect(() => {
        CostCalc()
    }, [params])

    return (
        <section id="calculadora" className="text-gray-700 body-font bg-gray-400">
            <div className="container px-5 md:px-1 py-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Calculadora</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Quer saber quanto será sua economia? Veja na Calculadora <strong>FaleMais</strong> e se surpreenda!</p>
                </div>
                <div className="flex w-full flex-col lg:flex-row text-center justify-between xl:w-2/3 lg:mx-auto">
                    <div className="relative">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="origin">
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
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dest">
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
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="time">
                            Tempo de Ligação <small>(em Minutos)</small>
                        </label>
                        <input
                            className="block appearance-none text-lg w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Ex: 60 para 1 Hora"
                            type="number"
                            id="time"
                            name="time"
                            min="0"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="relative ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dest">
                            Plano
                        </label>
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="plan"
                            name="plan"
                            onChange={handleChange}
                        >
                            <option value='30'>FaleMais 30</option>
                            <option value='60'>FaleMais 60</option>
                            <option value='120'>FaleMais 120</option>
                        </select>
                    </div>
                </div>

                <div className='mt-3'>
                    {
                        exists &&
                        <ResultTable data={result} />
                    }
                    {
                        !exists &&
                        params.priceWithout !== 0 &&
                        <div className="flex flex-col text-center w-full mb-12">
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Sem Tarifa Cadastrada</p>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Calc