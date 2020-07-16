import React from 'react'

import Menu from '../Menu'

const Footer = () => (
    <footer class="bg-gray-900">
        <div class="container max-w-6xl mx-auto flex items-center px-2 py-8">
            <div class="w-full mx-auto flex flex-wrap items-center">
                <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                    <a
                        class="text-gray-900 no-underline hover:text-gray-900 hover:no-underline"
                        href="https://www.linkedin.com/in/renatosiqueira/"
                        target='_blank'
                    >
                        <span class="text-base text-gray-200">Renato Siqueira</span>
                    </a>
                    <svg ></svg>
                </div>
                <Menu />
            </div>
        </div>
    </footer>
)

export default Footer