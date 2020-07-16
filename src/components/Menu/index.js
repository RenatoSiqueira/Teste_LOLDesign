import React from 'react'

const Menu = () => (
    <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
        <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li class="mr-3">
                <a class="inline-block py-2 px-4 text-white no-underline" href="#falemais">FaleMais</a>
            </li>
            <li class="mr-3">
                <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Calculadora</a>
            </li>
            <li class="mr-3">
                <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Tabela de Preços</a>
            </li>
        </ul>
    </div>
)

export default Menu