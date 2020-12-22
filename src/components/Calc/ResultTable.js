import React from 'react'

const ResultTable = ({ data }) => {
    return (
        <div className="xl:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                    <tr className='text-center'>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Origem</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Destino</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Tempo</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Plano FaleMais</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 font-bold">Com FaleMais</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 font-bold">Sem FaleMais</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 font-bold">Economize</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-gray-100 text-center'>
                        <td className="px-4 py-3">0{data.origin}</td>
                        <td className="px-4 py-3">0{data.dest}</td>
                        <td className="px-4 py-3">{data.time}</td>
                        <td className="px-4 py-3">FaleMais {data.plan}</td>
                        <td className="px-4 py-3">R$ {data.priceWith}</td>
                        <td className="px-4 py-3">R$ {data.priceWithout}</td>
                        <td className="px-4 py-3">R$ {data.savings}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable