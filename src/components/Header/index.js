import React from 'react'

import Menu from '../Menu'

const Header = () => (
    <nav class="bg-gray-800 p-2 mt-0 w-full">
        <div class="container mx-auto flex flex-wrap items-center">
            <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a class="text-white no-underline hover:text-white hover:no-underline" href="#">
                    <span class="text-2xl pl-2"><i class="em em-grinning"></i> Telzir Telecom</span>
                </a>
            </div>
            <Menu />
        </div>
    </nav>
)

export default Header