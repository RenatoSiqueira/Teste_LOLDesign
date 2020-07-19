import React from 'react'

const Plans = [
    {
        icon: 'statue-of-liberty.png',
        title: 'FaleMais 30',
        text: 'Muito mais liberdade para falar! O Plano FaleMais 30 lhe proporciona tranquilidade em ligações à distância.'
    },
    {
        icon: '25-de-abril-bridge.png',
        title: 'FaleMais 60',
        text: 'A ponte que faltava para comunicar com seus clientes ou filiais com muito mais comodidade. FaleMais 60 é o plano ideal para alavancar suas vendas.'
    },
    {
        icon: 'island-on-water.png',
        title: 'FaleMais 120',
        text: 'Tranquilidade total! O Fale Mais 120 garante conforto para ligações que necessitam de atenção diferenciada.'
    }
]

const Card = ({ icon, title, text }) => (
    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <img src={`https://img.icons8.com/color/48/000000/${icon}`} />
        </div>
        <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
            <p className="leading-relaxed text-base">{text}</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Veja Mais
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
)

const Hero = () => (
    <section className="text-gray-700 body-font">
        <div className="container px-5 py-20 mx-auto">
            <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Plano FaleMais</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Com o novo <strong>FaleMais</strong> da Telzir,  você pode falar de graça até
                um determinado tempo (em minutos) e só paga os minutos excedentes.
                    </p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                {
                    Plans.map((each, index) => <Card key={index} icon={each.icon} title={each.title} text={each.text} />)
                }
            </div>
            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Descubra qual é seu futuro Plano</button>
        </div>
    </section>
)

export default Hero