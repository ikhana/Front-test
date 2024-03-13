import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: "What is BitWit?",
    answer: "BitWit is a pioneering digital currency that offers secure and fast transactions across a decentralized network.",
  },
  {
    question: "How does BitWit ensure security?",
    answer: "BitWit employs cutting-edge cryptographic techniques and a robust consensus mechanism to secure transactions.",
  },
  {
    question: "Can I mine BitWit?",
    answer: "Yes, BitWit supports mining. Participants can contribute to network security in exchange for rewards.",
  },
  
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item bg-cybernoir-800 hover:bg-cybernoir-700 p-4 rounded-lg mb-3 shadow-glow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-cybernoir-50"
      >
        <h2 className="font-semibold">{question}</h2>
        {isOpen ? <FaMinus size={20} /> : <FaPlus size={20} />}
      </button>
      {isOpen && <p className="mt-2 text-cybernoir-300">{answer}</p>}
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="faq-section bg-cybernoir-gradient py-12 px-4" id="faq">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-cybernoir-50 mb-8">
          Frequently Asked Questions
        </h1>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
