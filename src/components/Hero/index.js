import React from 'react'

const Hero = () => (
    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24" id='falemais'>
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
            <p className="uppercase tracking-loose font-semibold">Novidade</p>
            <h1 className="font-bold text-3xl">FALE MUITO MAIS!</h1>
            <p className="leading-normal mb-4">
                Com o novo <strong>FaleMais</strong> da Telzir,  você pode falar de graça até
                um determinado tempo (em minutos) e só paga os minutos excedentes.
            </p>
                Os planos são:
                <ul>
                <li>- <strong>FaleMais 30</strong> (30 minutos)</li>
                <li>- <strong>FaleMais 60</strong> (60 minutos)</li>
                <li>- <strong>FaleMais 120</strong> (120 minutos)</li>
            </ul>
            <p className='text-xs mt-4'>
                Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto.
            </p>
        </div>
        <div className="w-full lg:w-1/2 lg:py-6 text-center">
            <svg className="fill-current text-gray-900 w-3/5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>
        </div>

    </div>
)

export default Hero