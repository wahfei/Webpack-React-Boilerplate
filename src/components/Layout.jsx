import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import '@src/main.css';


const Layout = () => {
  return (
    <main id="pageContent" className=' px-[7.292vw] pt-[8.333vw] min-h-svh'>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
