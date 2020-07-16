import React from 'react'

const TableItems = [
    { orig: '011', dest: '016', price: 1.90 },
    { orig: '016', dest: '011', price: 2.90 },
    { orig: '011', dest: '017', price: 1.70 },
    { orig: '017', dest: '011', price: 2.70 },
    { orig: '011', dest: '018', price: 0.90 },
    { orig: '018', dest: '011', price: 1.90 }
]

const Table = () => (
    <div className='container mx-auto items-center'>
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Origem</th>
                    <th className="px-4 py-2">Destino</th>
                    <th className="px-4 py-2">$/min</th>
                </tr>
            </thead>
            <tbody>
                {
                    TableItems.map((each, index) =>
                        <tr className='text-center' key={index}>
                            <td className="border px-4 py-2">{each.orig}</td>
                            <td className="border px-4 py-2">{each.dest}</td>
                            <td className="border px-4 py-2">{each.price.toFixed(2)}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
)

export default Table