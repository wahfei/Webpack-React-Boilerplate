import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className=" fixed top-[2.083vw] left-[7.292vw] right-[7.292vw] w-fit mx-auto flex gap-x-[4rem] bg-slate-500 px-12 py-4 rounded-full">
      <Link to="/" className=' leading-[1] text-white'>Home</Link>
      <Link to="/about" className=' leading-[1] text-white'>About</Link>
      <Link to="/contact" className=' leading-[1] text-white'>Contact</Link>
    </nav>
  );
};

export default Header;
