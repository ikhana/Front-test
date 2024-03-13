// Dex.jsx
import React from 'react';
import dexImage from './Dex.png'; // Make sure the path to your image is correct
import './Dex.css';

const Dex = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen p-8 " id="dex">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between rounded-3xl p-10">
        <div className="flex flex-col justify-center md:w-1/2 space-y-4 text-white">
          <h1 className="dex-title text-cybernoir-500 text-4xl md:text-5xl font-bold" style={{ 
         marginBottom:"10px",
 
  
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
}}>How to Buy</h1>
          <ul className="text-lg list-disc pl-5">
            <li>Create a Wallet (e.g., MetaMask)</li>
            <li>Add BNB to your wallet</li>
            <li>Copy and paste the contract address in the widget.</li>
            <li>Swap BNB for $BABYBOB</li>
          </ul>
          <button className="mt-4 py-2 px-6 rounded-full bg-liquidity hover:bg-marketing text-white font-bold dex-shadow transition duration-300 ease-in-out">
            Connect Wallet
          </button>
        </div>
        <div className="dex-glass-effect md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden rounded-xl p-4">
          <img
            src={dexImage}
            alt="Dex UI"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Dex;
