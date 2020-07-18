import React from 'react'

const PriceTable = ({ data }) => (
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
                data.map((each, index) => (
                    <tr
                        key={index}
                        className={`text-center ${!each.price ? 'bg-gray-100' : ''}`}
                    >
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
)

export default PriceTable