import React from 'react'

const Calc = () => (
    <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Calculadora</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 justify-around text-center">
                <div className="relative">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="origin">
                        Origem
                        </label>
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="origin"
                    >
                        <option>(011) - São Paulo</option>
                        <option>(016) - São Paulo</option>
                        <option>(017) - São Paulo</option>
                        <option>(018) - São Paulo</option>
                    </select>
                </div>
                <div className="relative">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="dest">
                        Destino
                        </label>
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="dest"
                    >
                        <option>(011) - São Paulo</option>
                        <option>(016) - São Paulo</option>
                        <option>(017) - São Paulo</option>
                        <option>(018) - São Paulo</option>
                    </select>
                </div>
                <div className="relative">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="time">
                        Tempo de Ligação
                        </label>
                    <input
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="Ex: 60 para 1 Hora"
                        type="text"
                        id="time"
                    />
                </div>
                <div className="relative">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="plan">
                        Plano
                    </label>
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="plan"
                    >
                        <option>Com FaleMais</option>
                        <option>Sem FaleMais</option>
                    </select>
                </div>
            </div>
        </div>
    </section>
)

export default Calc