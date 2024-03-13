// About.jsx
import React from 'react';
import bitwit from './about3.png';
import './Aboutus.css'; // Make sure to import your CSS file

const About = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen p-8 " id="about">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between  rounded-3xl p-10">
        <div className="flex flex-col justify-center md:w-1/2 space-y-4 text-white">
          <h1 className=" text-cybernoir-500 text-4xl md:text-5xl font-bold"  style={{ 
            fontSize:" 2.5em",
 
  
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
}}>About BITWIT</h1>
          <p className="text-lg">
            In the heart of the crypto-sphere emerges $BUCK, the enigmatic memecoin
            represented by an angry orange duck. Its origin remains shrouded in
            mystery. Some whisper that it could be the work of an anonymous
            cryptographic genius...
          </p>
          <button className="mt-4 py-2 px-6 rounded-full bg-liquidity hover:bg-marketing text-white font-bold shadow-glow transition duration-300 ease-in-out">
            More About Us
          </button>
        </div>
        <div className="glass-effect md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden rounded-xl p-4">
          <img
            src={bitwit}
            alt="BitWit Logo"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
