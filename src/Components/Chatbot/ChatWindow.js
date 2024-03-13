// ChatWindow.js
import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';
import logo from './img33.png'; // Replace with your logo path
import "./Chatbot.css";

const ChatWindow = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [answers] = useState({
    "What is Bitcoin?": "Bitcoin is a decentralized cryptocurrency, invented by an unknown person or group of people under the name Satoshi Nakamoto in 2009.",
    "How does blockchain work?": "Blockchain is a distributed database that maintains a continuously growing list of records, called blocks, which are linked and secured using cryptography.",
    "What is Ethereum?": "Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, fraud or third-party interference."
   
  });

  const clearConversation = () => {
    setMessages([]);
    setShowSuggestions(true);
  };

  const sendMessage = (message) => {
    if (message.trim() !== '') {
      const newMessage = { text: message, sender: 'user' };
      const reply = answers[message] || "I don't have an answer to that question yet.";
      setMessages([...messages, newMessage, { text: reply, sender: 'bot' }]);
      setInputMessage('');
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    if (e.target.value.trim() === '') {
      setShowSuggestions(true);
    }
  };

  const predefinedQuestions = [
    "What is Bitcoin?",
    "How does blockchain work?",
    "What is Ethereum?",
   
  ];


  return (
    <main className="flex flex-col h-screen bg-cybernoir-800">
      <div className="flex flex-col items-center p-6">
        <img src={logo} alt="Logo" className="w-20 mb-4" />
        <div className="w-full max-w-md">
          <input
            type="text"
            value={inputMessage}
            onChange={handleInputChange}
            placeholder="Ask a question..."
            className="w-full p-3 border border-cybernoir-500 rounded-full focus:outline-none bg-cybernoir-700 text-white"
            onFocus={() => setShowSuggestions(true)}
          />
          {showSuggestions && (
            <div className="flex flex-wrap justify-center mt-4">
              {predefinedQuestions.map((question, index) => (
                <div
                  key={index}
                  className="bg-cybernoir-700 text-white p-3 rounded-full m-1 hover:bg-cybernoir-600 cursor-pointer"
                  onClick={() => sendMessage(question)}
                >
                  {question}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="overflow-y-auto flex-grow p-6">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-md rounded-lg p-4 ${message.sender === 'user' ? 'bg-liquidity text-white' : 'bg-cybernoir-500 text-white'}`}>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center p-6">
        <button
          onClick={clearConversation}
          className="bg-liquidity text-white p-2 border border-gray-300 rounded-xl hover:bg-marketing focus:outline-none"
        >
          Clear Conversation
        </button>
      </div>
    </main>
  );
};

export default ChatWindow;