import React from 'react'

import Menu from '../Menu'

const Header = () => (
    <nav className="bg-gray-800 p-2 mt-0 w-full">
        <div className="container mx-auto flex flex-wrap items-center">
            <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                    <span className="text-2xl pl-2"><i className="em em-grinning"></i> Telzir Telecom</span>
                </a>
            </div>
            <Menu />
        </div>
    </nav>
)

export default Header