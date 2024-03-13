// Chat.js
import React, { useState } from 'react';

import Header from './Header';
import ChatWindow from './ChatWindow';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import DynamicBackground from '../Animation/DynamicBackground';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi there!', sender: 'bot' },
    { id: 3, text: 'How can I help you today?', sender: 'bot' },
  ]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { id: messages.length + 1, text: message, sender: 'user' }]);
    // You can add logic here to handle the bot's response
  };

  return (
    <div>
      <Navbar />
      <DynamicBackground />
      <div className="flex h-screen bg-gray-100">
        <div className="flex-1 flex flex-col bg-cybernoir-gradient" style={{ height: "fit-content" }}>
          <Header />
          <div className="flex justify-center">
  <h2 className='text-5xl text-angryduck-500 font-bold mt-4 mb-2' style={{ fontFamily: "serif" }}>
    Chat with <span className="text-liquidity">BitWit</span>
  </h2>
</div>

          <div className='flex-1 p-4 m-12 bg-cybernoir-800 rounded-lg border shadow-lg'>
            <ChatWindow />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Chat;