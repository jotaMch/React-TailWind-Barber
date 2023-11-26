import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [borderVal, setBorderVal] = useState(''); 
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://incredible-boba-9e191a.netlify.app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
    
            if (response.ok) {
                console.log('Login bem-sucedido!');
                // Redirecionar para a página /home após o login
                navigate('/home');
            } else {                
                setBorderVal('border-red-600');
                console.error('Erro no login.');
            }
        } catch (error) {
            console.error('Erro ao realizar a solicitação de login.', error);
        }
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className=' 
            h-screen w-full h-screen bg-[#111]	
            flex flex-col justify-center items-center'>

            <h2 className="text-[#fff] font-semibold text-md mb-4">Login</h2>

            <div 
            class="
            relative z-10 overflow-hidden w-10/12 h-70 rounded 
            flex flex-col justify-center p-3 " 
            id="login"
            >  

                <form onSubmit={(e) => handleLoginSubmit(e)} 
                className="flex flex-col text-gray-700"
                >
                <div className='mb-4 relative'>
                    <label htmlFor="emailLogin" 
                    className="text-[#FF9400] text-left block text-xs absolute bg-[#111] px-[4px] top-[-4px] left-[16px] after:content-['*']">
                        E-mail 
                    </label>     

                    <input
                    type="email"
                    id="emailLogin"
                    name="email"
                    required
                    onChange={handleInputChange}
                    className={`
                    w-full p-2 mb-2 mt-1 outline-none text-gray-600 text-xs
                    bg-transparent border border-[#FF9400] rounded-3xl ${borderVal}
                    `}
                    />
                </div>                    

                <div className='mb-4 relative'>
                    <label htmlFor="passwordLogin" 
                    className="text-[#FF9400] text-left block text-xs absolute bg-[#111] px-[4px] top-[-4px] left-[16px] after:content-['*']">
                        Password  
                    </label>
                    <input
                    type="password"
                    id="passwordLogin"
                    name="password"
                    required
                    onChange={handleInputChange}
                    className={`
                    w-full p-2 mb-2 mt-1 outline-none text-gray-600 text-xs
                    bg-transparent border border-[#FF9400] rounded-3xl ${borderVal}
                    `}
                    />
                </div>

                    <div className="flex flex-col items-center">
                        <button type="submit" 
                        className="
                        w-full rounded bg-blue-500 text-white p-2 rounded-3xl text-center font-bold                        
                        ">
                            Login
                        </button>
                        
                    </div>
                </form>

            </div>
            <Link to="/register" className="w-full mt-5">
                <button type="button" 
                className="w-full rounded 
                text-[#FF9400] p-2 text-center ">
                    Cadastre-se
                </button>
            </Link>
        </div>
    );
};

export default Login;





















{/* <form onSubmit={(e) => handleLoginSubmit(e)} className="max-w-md">
    <div className="mb-4">
        <label htmlFor="emailLogin" className="block text-sm font-medium text-gray-600">
            Email:
        </label>
        <input
            type="email"
            id="emailLogin"
            name="email"
            required
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
        />
    </div>
    <div className="mb-4">
        <label htmlFor="passwordLogin" className="block text-sm font-medium text-gray-600">
            Password:
        </label>
        <input
            type="password"
            id="passwordLogin"
            name="password"
            required
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
        />
    </div>
    <div className="flex items-center">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Login
        </button>
        <Link to="/" className="ml-4">
            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md">
                Cadastre-se
            </button>
        </Link>
    </div>
</form>
*/}
