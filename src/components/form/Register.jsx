import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Register = () => {
    const [borderVal, setBorderVal] = useState(''); 
    const [pass, setPass] = useState(true);
    const [confirm, setConfirm] = useState(true);
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
    });    
    const navigate = useNavigate();

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData),
            });

            if (response.ok) {
                console.log('Registro bem-sucedido!');
                navigate('/login')
            } else {
                console.error('Erro no registro.');
            }
        } catch (error) {
            console.error('Erro ao realizar a solicitação de registro.', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegisterData((prevData) => ({ ...prevData, [name]: value }));
        if (name === "password") {
            setPass(value.length >= 8);

        } else if (name === "confirmpassword") {
            setConfirm(value === registerData.password);
            setBorderVal(value === registerData.password ? '' : 'border-red-600');
        } else {
        }
    }

    return (
        <div className='w-full h-screen flex flex-col bg-[#fff] justify-center items-center'>
            <h2 className="text-gray-600 font-semibold text-md mb-4">Register</h2>
            <form 
            onSubmit={(e) => handleRegisterSubmit(e)} 
            className="w-10/12"
            >
                <div className="my-5 relative">
                    <label htmlFor="name" className="text-gray-600 text-left block text-xs absolute bg-[#fff] px-[4px] top-[-8px] left-[16px]">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        onChange={handleInputChange}
                        className="w-full p-2  outline-none text-gray-600 text-xs
                        bg-transparent border border-gray-600 rounded-3xl"
                    />
                </div>
                <div className="my-5 relative">
                    <label htmlFor="email" className="text-gray-600 text-left block text-xs absolute bg-[#fff] px-[4px] top-[-8px] left-[16px]">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={handleInputChange}
                        className="w-full p-2  outline-none text-gray-600 text-xs
                        bg-transparent border border-gray-600 rounded-3xl"
                    />
                </div>
                <div className="my-5 relative">
                    <label htmlFor="password" className="text-gray-600 text-left block text-xs absolute bg-[#fff] px-[4px] top-[-8px] left-[16px]">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        onChange={handleInputChange}
                        className={`w-full p-2  outline-none text-gray-600 text-xs
                        bg-transparent border ${borderVal} border-gray-600 rounded-3xl`}
                    />
                    {pass ? '' : (
                    <p className='text-red-600 text-left block text-xs pl-[16px]'>
                        Sua senha deve ter pelo menos 8 caracteres
                    </p>)}

                    {confirm ? '' : (
                    <p className='text-red-600 text-left block text-xs pl-[16px]'>
                        As senhas não coincidem
                    </p>)}

                </div>
                <div className="my-5 relative">
                    <label htmlFor="confirmpassword" className="text-gray-600 text-left block text-xs absolute bg-[#fff] px-[4px] top-[-8px] left-[16px]">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        required
                        onChange={handleInputChange}
                        className={`w-full p-2  outline-none text-gray-600 text-xs
                        bg-transparent border ${borderVal} border-gray-600 rounded-3xl`}
                    />
                    {confirm ? '' : (
                    <p className='text-red-600 text-left block text-xs pl-[16px]'>
                        As senhas não coincidem
                    </p>)}
                </div>
                <div className="flex flex-col items-center">
                    <button type="submit" 
                    className=" w-full bg-blue-500 text-white px-4 py-2 rounded-3xl font-bold"
                    >
                        Register
                    </button>
                    <Link to="/login" className='mt-5 w-full'>
                        <button type='button' 
                        className="w-full text-[#FF9400] px-4 py-2 rounded-md"
                        >
                            Login
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;













