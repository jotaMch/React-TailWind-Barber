import React, { useState, useEffect } from 'react';
import { IoIosSend } from "react-icons/io";
import Logo from '../../../assets/initial-image/logo.png'
import { Link } from 'react-router-dom';

const MarcarCorte = () => {
    const [dataAtual, setDataAtual] = useState(new Date());
    const [dataFutura, setDataFutura] = useState(null);

    useEffect(() => {
        const novaData = new Date(dataAtual);
        novaData.setDate(novaData.getDate() + 15);
        setDataFutura(novaData);
    }, [dataAtual]);

    const formatarData = (data) => {
        // Verificando se 'data' é uma instância válida de Date
        if (data instanceof Date && !isNaN(data)) {
            const year = data.getFullYear();
            const month = String(data.getMonth() + 1).padStart(2, '0');
            const day = String(data.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        } else {
            return ""; // Ou outra ação adequada caso 'data' não seja válida
        }
    };

    return (
        <div className="container-marcacao h-screen bg-[#f0ecec] flex flex-col justify-center items-center">
            <img src={Logo} alt="" />
            <h2 className="text-gray-500 mb-5">Não é uma fase é um <span className='text-[#FF9400]'>ESTILO!</span></h2>
            <form className="p-4 w-10/12 flex flex-col justify-center items-center">

                <div className="flex justify-between">
                    <input
                        className="h-8 w-5/12 p-2 mb-2 mt-1 outline-none border-gray-500 text-gray-500 bg-transparent border rounded-3xl"
                        name="first_name"
                        placeholder="First Name"
                        type="text"
                    />
                    <input
                        className="h-8 w-5/12 p-2 mb-2 mt-1 outline-none border-gray-500 text-gray-500 bg-transparent border rounded-3xl"
                        name="last_name"
                        placeholder="Last Name"
                        type="text"
                    />
                </div>

                <input
                    className="h-8 w-full p-2 mb-2 mt-1 outline-none border-gray-500 text-gray-500 bg-transparent border rounded-3xl"
                    name="data"
                    placeholder=""
                    type="date"
                    min={formatarData(dataAtual)}
                    max={formatarData(dataFutura)}
                />
                
                <select 
                className="
                h-8 w-full pl-2 mb-2 mt-1 outline-none border-gray-500 
                bg-[#ffffff] text-gray-500 border rounded-3xl"
                name="hora">
                <option value="08:30">08:30 AM</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="09:30">09:30 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="13:00">13:00 PM</option>
                    <option value="13:30">13:30 PM</option>
                    <option value="14:00">14:00 PM</option>
                    <option value="14:30">14:30 PM</option>
                    <option value="15:00">15:00 PM</option>
                    <option value="17:00">17:00 PM</option>
                    <option value="17:30">17:30 PM</option>
                    <option value="18:00">18:00 PM</option>
                    <option value="18:30">18:30 PM</option>
                </select>
                

                
                <Link to='/dev' className='w-10/12 h-10 flex items-center justify-center'>
                    <button 
                    className='
                    bg-[#FF9400] text-white rounded-3xl font-bold mt-4
                    w-10/12 h-10 flex items-center justify-center'>
                            Marcar meu corte <IoIosSend />
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default MarcarCorte;
