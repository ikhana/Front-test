import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaCoins, FaWater, FaBullhorn,FaCode, FaLandmark } from 'react-icons/fa';
import './Token.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Presale', 'Liquidity', 'Marketing', 'Development', 'Reserves'],
  datasets: [
    {
      label: 'Token Distribution',
      data: [50, 20, 10, 10, 10], // Adjusted percentages to add up to 100%
      backgroundColor: [
        '#ffa300', 
        '#cc8a4c', 
        '#b3733e', 
        '#99602f', 
        '#804e21', 
      ],
      borderColor: [
        '#ffa300', 
        '#cc8a4c', 
        '#b3733e', 
        '#99602f', 
        '#804e21', 
      ],
      borderWidth: 1,
      hoverOffset: 4
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Tokenomics',
      color: 'white',
      font: {
        size: 24
      }
    }
  }
};

const Token = () => {
  return (
    <><div className='headingContainer' id='token'><h1 className="token-header">TOKENOMICS</h1></div>
    <div className="token-container">
      
      <div className="chart-container">
        <div className="glass-overlay"></div> {/* This is the new glass overlay */}
        <Pie data={data} options={options} />
      </div>
      
      
      <div className="info-container">
        
        <div className="glass-container total-supply">
          <FaCoins className="icon-style" />
          <span>Total Supply: 420,000,000,000,000</span>
        </div>
        <div className="glass-container">
          <FaCoins className="icon-style" />
          <span>50% Presale</span> {/* Adjusted percentage */}
        </div>
        <div className="glass-container">
          <FaWater className="icon-style" />
          <span>20% Liquidity</span> {/* Adjusted percentage */}
        </div>
        <div className="glass-container">
          <FaBullhorn className="icon-style" />
          <span>10% Marketing</span> {/* Adjusted percentage */}
        </div>
        {/* Additional sections */}
        <div className="glass-container">
          {/* Assuming FaCode represents Development */}
          <FaCode className="icon-style" />
          <span>10% Development</span>
        </div>
        <div className="glass-container">
          {/* Assuming FaLandmark represents Reserves */}
          <FaLandmark className="icon-style" />
          <span>10% Reserves</span>
        </div>
      </div>
    </div></>
  );
}

export default Token;