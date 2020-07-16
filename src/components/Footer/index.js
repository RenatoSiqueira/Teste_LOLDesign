import React from 'react'

import Menu from '../Menu'
import LinkedinIcon from '../../assets/linkedin.svg'
import GithubIcon from '../../assets/github.svg'

const Footer = () => (
    <footer className="bg-gray-900">
        <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
            <div className="w-full mx-auto flex flex-wrap items-center">
                <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                    <a
                        className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline mr-3"
                        href="https://me.renatosiqueira.dev/"
                        target='_blank'
                    >
                        <span className="text-base text-gray-200">Renato Siqueira</span>
                    </a>
                    <a
                        className='mr-3 pt-1'
                        href="https://www.linkedin.com/in/renatosiqueira/"
                        target='_blank'
                    >
                        <img src={LinkedinIcon} alt="linkedin" style={{ width: '1rem' }} />
                    </a>
                    <a
                        className='pt-1'
                        href="https://github.com/renatosiqueira"
                        target='_blank'
                    >
                        <img
                            src={GithubIcon}
                            alt="github"
                            style={{ width: '1rem' }}
                        />
                    </a>
                </div>
                <Menu />
            </div>
        </div>
    </footer>
)

export default Footer