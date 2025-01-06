import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Login = ({ setNames }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    localStorage.setItem('names', JSON.stringify(name));
    setNames(name);
    console.log("Posted");
    navigate('/home');
  };

  return (
    <div className='login h-[100vh]'>
    <img src={logo} alt="" className='login-icon w-[150px] p-4' />
    <div className="login-form w-[100%] max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded p-[60px] m-auto">
        <h1 className='texxt-md font-bold mb-[28px]'>Sign In</h1>
        <div className='flex justify-center items-center'>
            <div>
                <form action="#" className='flex flex-col justify-center'>
                    <input type="text" placeholder="Enter your Name" value={name} onChange={(e)=> { setName(e.target.value) }} className='w-100 h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 py-[16px] px-[20px] text-md font-bold' />
                    <input type="email" placeholder='Email' value={email} onChange={(e)=> { setEmail(e.target.value) }} className='w-100 h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 py-[16px] px-[20px] text-md font-bold' />
                    <input type="password" placeholder='Password' value={password} onChange={(e)=> { setPassword(e.target.value) }} className='w-100 h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 py-[16px] px-[20px] text-md font-bold' />
                    <button type='submit' className='block w-100 p-[16px] bg-[#e50914] rounded text-md mt-[20px] cursor-pointer' onClick={handleSignIn}>Sign In</button>
                    <div className="form-help flex items-center justify-between text-[#b3b3b3] mt-[20px]">
                        <p>Need help?</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  );
}

export default Login;