import React, { useState } from 'react';
import Logo from '../../assets/initial-image/logo.png'
import { CgChevronDoubleDownO } from "react-icons/cg";
import { Link } from 'react-router-dom';
import Map from '../../assets/image-map/map.webp'


const Home = () => {
    const [menuClass, setMenuClass] = useState('');
    const clickMenu = () => {
        setMenuClass((prevClass) => (prevClass === 'h-14' ? '' : 'h-14'));
        console.log(setMenuClass)
    };
    return (
        <>
            <header className='flex flex-col'>  

                <div className="container mx-auto flex  justify-between items-center p-4 ">
                    <div className='mx-auto flex w-full justify-between items-center'>
                        <img src={Logo} alt="logo barber" className='w-12 h-30 rounded-md' />
                        <button type='button' className='flex flex-col bg-[#FF9400] p-2 rounded-md'
                        onClick={clickMenu}
                        >
                            <span className='w-8 h-0.5 bg-[#111]'></span>
                            <span className='w-8 h-0.5 bg-[#111] my-2'></span>
                            <span className='w-8 h-0.5 bg-[#111]'></span>
                        </button>
                    </div>
                </div>

                <nav className={`
                text-white bg-[#FF9400] w-screen flex overflow-hidden 
                transition-height duration-300 ease-in-out
                navbar items-center menu h-0 ${menuClass}`}
                >                    
                    <ul className="flex space-x-4 w-full flex justify-around">
                        <li><a href="#" className="font-bold hover:text-gray-300">Início</a></li>
                        <li><a href="#servicos" className="font-bold hover:text-gray-300">Serviços</a></li>
                        <li><a href="#contato" className="font-bold hover:text-gray-300">Contato</a></li>
                    </ul>
                </nav>

            </header>

        <div className="img-home font-sans">
            <CgChevronDoubleDownO className='icon '/>
        </div>

        <section className='bg-[#111] flex flex-col mt-10 items-center'>

            <h2 className="text-left w-10/12 text-white font-bold mb-4">Meus <span className='text-[#FF9400]'>serviços</span> </h2>
            <article className='w-10/12 h-60 bg-[#dce5fa] flex justify-center items-end mb-10 rounded-xl' id='corte-1'>
                <div className='w-full h-10 bg-[#FF9400] flex justify-center items-center rounded-b-xl'>
                    <p>Nome do corte 1 </p>
                </div>
            </article>
            <article className='w-10/12 h-60 bg-[#dce5fa] flex justify-center items-end mb-10 rounded-xl' id='corte-2'>
                <div className='w-full h-10 bg-[#FF9400] flex justify-center items-center rounded-b-xl'>
                    <p>Nome do corte 2</p>
                </div>
            </article>
            <article className='w-10/12 h-60 bg-[#dce5fa] flex justify-center items-end mb-10 rounded-xl' id='corte-3'>
                <div className='w-full h-10 bg-[#FF9400] flex justify-center items-center rounded-b-xl'>
                    <p>Nome do corte 3</p>
                </div>
            </article>

        </section>

        <main className='bg-[#111] flex flex-col items-center'>

            <div className='w-10/12'>
                <h1 className="text-left w-10/12 text-white font-bold mb-4">Agende seu <span className='text-[#FF9400]'>corte</span> </h1>
                <h2 className='text-white fz-md'>Escolha o dia e hora para o seu corte e deixe marcado</h2>
                <p className='text-[#FF9400] text-xs py-5'>
                    Lembrando que os horarios disponíveis são de segunda a sexta das 08:00 as 11:30 e das 14:00 as 19:00!
                </p>
                <Link to='/marcar'>
                    <button className='bg-[#FF9400] text-white rounded-3xl font-bold px-8 py-2 mb-8'>
                        Marcar meu corte
                    </button>
                </Link>
            </div>

        </main>

        <div className='bg-[#111] flex flex-col items-center'>
            <h2 className="text-center w-10/12 text-white font-bold mb-4">Veja a localização da barbearia Your Name!</h2>
            <div className='w-full'>
                <img src={Map} className='w-full h-full' alt="map" />
            </div>
        </div>
        </>
    );
};

export default Home;
