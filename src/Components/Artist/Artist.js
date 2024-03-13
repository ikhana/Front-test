
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import DynamicBackground from '../Animation/DynamicBackground';

const titles = {
  textToVoice: 'Text to Voice',
  textToImage: 'Text to Image',
  textToVideo: 'Text to Video',
  marketAnalysis: 'Coming Soon',
};

const Card = ({ action, onGenerateClick, response }) => {
  const [isHovered, setHovered] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setLoading] = useState(false);

  const cardSpring = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
  });

  const handleGenerate = async () => {
    setLoading(true);
    await onGenerateClick(action, prompt);
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-cybernoir-50" style={{ marginBottom: "-70px", marginTop: "90px", fontFamily: "monospace" }}>
        {titles[action]}
      </h2>
      <DynamicBackground />
      <animated.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ ...cardSpring }}
        className="mx-3 mb-6 flex flex-col rounded-lg bg-cybernoir-800 shadow-lg dark:bg-neutral-700 mt-24 relative"
      >
  <div className='w-full text-center rounded-lg p-3 bg-cybernoir-800 border border-cybernoir-50' style={{ height: "400px" }}>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full">
            
      <svg aria-hidden="true" className="w-8 h-8 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#cc8a4c"/>
  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>  
              <span className="sr-only">Loading...</span>
            </div>
          ) : response ? (
            <div className="text-white mb-4">
              {/* Display the response based on the action */}
            </div>
          ) : (
            <p className="text-white text-3xl justify-center text-center mt-40">Enter text to see my AI magic</p>
          )}
        </div>

        <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow relative">
          <div className="flex items-center border border-blue-500 rounded-md p-2 mb-2">
            <input
              type="text"
              className="flex-grow p-2 border-none focus:outline-none"
              placeholder="Input Field"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              onClick={handleGenerate}
              className="bg-angryduck-500 text-cybernoir-50 p-2 border border-cybernoir-300 rounded-md hover:bg-angryduck-600 focus:outline-none"

            >
              Generate
            </button>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

const Artist = () => {
  const [mediaSrc, setMediaSrc] = useState({
    textToVoice: '',
    textToImage: '',
    textToVideo: '',
    marketAnalysis: '',
  });

  const handleGenerateClick = async (action, prompt) => {
    console.log(`Button clicked for ${action} with prompt: ${prompt}`);
    
    let endpoint = 'https://api.bitbase.capital/generate-speech';

    switch (action) {
      case 'textToVoice':
        endpoint = 'https://api.bitbase.capital/generate-speech';
        break;
      case 'textToImage':
        endpoint = 'https://api.bitbase.capital/generate'
        break;
      case 'textToVideo':
        endpoint = 'https://api.bitbase.capital/generate-video'
        break;
      case 'marketAnalysis':
        break;
      default:
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      console.log("Received media URL:", data);
      console.log("Received media URL:", data.imageSrc || data.videoSrc || data.speechSrc);
      const newMediaSrc = data.imageSrc || data.videoSrc || data.speechSrc;
      setMediaSrc(prevSrcs => ({ ...prevSrcs, [action]: newMediaSrc }));
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };
  return (
    <div className="flex flex-col min-h-screen  text-cybernoir-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center max-w-screen-lg mx-auto">
          {Object.keys(titles).map((action) => (
            <Card key={action} action={action} onGenerateClick={handleGenerateClick} response={mediaSrc[action]} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artist;

