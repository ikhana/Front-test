import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

import About from '../Components/AboutUs/About';
import Features from '../Components/Token/Token';
import Info from '../Components/Info/Info';
import Footer from '../Components/Footer/Footer';
import FAQSection from '../Components/Faq/Faq';
import Home from './Home/home';
import News from '../Components/News/News';
import DynamicBackground from '../Components/Animation/DynamicBackground';
import TimeLine from '../Components/Timeline/Timeline';
import Token from '../Components/Token/Token';
import Dex from '../Components/Dex/Dex';




const Homepage = () => {
    return (
        <div>
       
        <Navbar />
        <Home />
        <About />
     
        <Info />
       <Token/>
       <Dex/>
        <TimeLine/>
        {/* <Features /> */}
        <News />
        <FAQSection />
        <Footer />
        </div>
    );
    }
export default Homepage;