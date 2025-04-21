import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [names, setNames] = useState("");

  useEffect(() => {
    const storedNames = localStorage.getItem('names');
    if (storedNames) {
      setNames(JSON.parse(storedNames));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('names');
    navigate('/');
  };

  return (
    <div className='navbar w-100 py-[20px] px-[6%] md:px-[4%] flex justify-between text-sm z-1 text-customGray' style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)' }}>
    <div className='navbar-left flex items-center gap-[50px]'>
        <img src={logo} alt="logo" className='w-[90px]' />
        <ul className='hidden md:flex list-none gap-[20px]'>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Popular</li>
            <li>List</li>
        </ul>
    </div>
    <div className='navbar-right flex gap-[20px] items-center'>
        <img src={search_icon} alt="search_icon" className='icons w-[20px] cursor-pointer' />
        <p>{names ? names : "Children"}</p>
        <img src={bell_icon} alt="bell_icon" className='icons w-[20px] cursor-pointer' />
        <div className="navbar-profile flex items-center gap-[10px] cursor-pointer relative" onClick={()=> setHover(!hover)} >
            <img src={profile_img} alt="profile_icon" className='profile rounded w-[35px]' />
            <img src={caret_icon} alt="caret_icon"/> {hover && (
            <div className="dropdown absolute top-10 right-0 w-max bg-[#191919] py-[18px] px-[22px] rounded z-10">
                <p className='text-sm cursor-pointer hover:underline' onClick={()=> handleLogout()}>Sign Out of Netflix</p>
            </div>
            )}
        </div>
    </div>
</div>
  );
};

export default Navbar;