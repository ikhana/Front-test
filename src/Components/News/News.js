// News.js
import React from 'react';
import './News.css';

const cardsData = [

    { imageUrl: 'https://klaytn.foundation/wp-content/uploads/2023/01/ecosystem_wallets_huobiwallet-1-140x140.png', text: 'Huobi Wallet' },
    { imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5614.png', text: 'Zelwin Finance' },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/9608.png", text: "Spooky Swap" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/10299.png", text: "Binance Coin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/9608.png", text: "Spooky Swap" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/10299.png", text: "Binance Coin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },

    // Add more card data as needed
    // ... Repeat the above cards to add more
  ];

  const Card = ({ imageUrl, text }) => (
    <div className="flex items-center justify-center mx-2 card">
      <img className="w-12 h-12 md:w-16 md:h-16 rounded-full imgcard" src={imageUrl} alt={text} />
      <p className="hidden md:block text-white text-sm ml-2">{text}</p>
    </div>
  );
  
  const InfiniteCardLoop = ({ cards }) => (
    <div className="flex overflow-hidden news-container">
      <div className="flex animation-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
  
  const News = () => (
    <div className="bg-cybernoir-900 p-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="infinite-card-loop-container">
          <InfiniteCardLoop cards={cardsData} />
        </div>
      </div>
    </div>
  );
  
  export default News;


