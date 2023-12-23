import Animation from '../assets/js/Animation';
import React from 'react';

const Home = () => {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <section className="flex justify-center flex-col ">
      <h1 className="font-roboto anim opacity-0" data-anim="fade-in-up" data-duration="0.8">
        Home Page
      </h1>
      <Animation />
    </section>
  );
};

export default Home;
