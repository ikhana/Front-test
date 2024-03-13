import React, { useState } from 'react';
import styles from './Info.module.css';
import personalized from "./personalized.png";
import grading from "./grading.png";
import knowledge from "./knowledge.png"
import analytics from "./analytics.png"


const cardsData = [
  {
    id: 1,
    icon:knowledge,
    title: 'Knowledge Assessment',
    description: "Take BitWit's interactive assessment to gauge your current understanding and get a personalized learning path tailored just for you.",
    path: 'M192.1,-148.2C230,-105.8,228.6,-27,204.4,33.7C180.2,94.3,133.3,136.8,77.7,165C22.1,193.1,-42.1,206.9,-94.5,185.7C-146.9,164.5,-187.5,108.3,-201.7,46C-215.9,-16.2,-203.7,-84.5,-165.7,-127C-127.7,-169.5,-63.8,-186.3,6.6,-191.6C77.1,-196.9,154.3,-190.7,192.1,-148.2Z',
    linkTo: '/mcq',
  },
  {
    id: 2,
    icon: personalized,
    title: 'Personalised Training',
    description: "From the basics of Bitcoin to the intricacies of smart contracts, BitWit's custom learning modules elevate your blockchain knowledge.",
    path: 'M194.1,-154.4C241.7,-95.1,263.7,-14.9,242.8,47C222,108.9,158.3,152.7,93.7,177.1C29.1,201.5,-36.4,206.6,-87.6,182C-138.8,157.3,-175.7,102.9,-189.7,42.9C-203.7,-17.1,-194.9,-82.8,-159.5,-139.3C-124.1,-195.9,-62,-243.5,5.6,-247.9C73.2,-252.4,146.5,-213.8,194.1,-154.4Z',
    linkTo: '/chatbot',
  },
  {
    id: 3,
    icon: grading,
    title: 'AI-Powered Crypto Market Insights',
    description: "Leverage BitWit's AI capabilities for in-depth market analysis, uncovering potential investment opportunities in the dynamic world of cryptocurrencies.",
    path: 'M186.5,-139.7C230.7,-93.3,247.9,-16.4,233.4,55.7C218.9,127.7,172.6,195,112.8,217.3C52.9,239.7,-20.4,217.1,-84.7,183.3C-148.9,149.5,-204.1,104.3,-219.6,47.1C-235.2,-10.2,-211,-79.6,-167.8,-125.8C-124.6,-172,-62.3,-195,4.4,-198.5C71.1,-202.1,142.3,-186.1,186.5,-139.7Z',
    linkTo: '/analytic',
  },
  {
    id: 4,
    icon: analytics,
    title: 'Grading System',
    description: "Make informed decisions with BitWit's grading system, which ranks potential investments based on thorough analysis and market trends.",
    path: 'M186.5,-139.7C230.7,-93.3,247.9,-16.4,233.4,55.7C218.9,127.7,172.6,195,112.8,217.3C52.9,239.7,-20.4,217.1,-84.7,183.3C-148.9,149.5,-204.1,104.3,-219.6,47.1C-235.2,-10.2,-211,-79.6,-167.8,-125.8C-124.6,-172,-62.3,-195,4.4,-198.5C71.1,-202.1,142.3,-186.1,186.5,-139.7Z',
    linkTo: '/artist',
  },
];

const Card = ({ data, setActiveCardId, active }) => (
  <div className={`${styles.card} ${active ? styles.cardActive : ''}`} onMouseOver={() => setActiveCardId(data.id)}>
    <svg className={styles.svgBackground} viewBox="0 0 600 600">
      <path className={styles.blob} d={data.path}></path>
    </svg>
    <div className={styles.circularBorder}>
      <img src={data.icon} alt="icon" className={styles.cardIcon} />
    </div>
    <h2 className={styles.cardTitle}>{data.title}</h2>
    <p className={styles.cardDescription}>{data.description}</p>
    <p className={styles.cardLearnMore}><a href={data.linkTo} className={styles.cardLink}>Learn more →</a></p>
  </div>
);

const Info = () => {
  const [activeCardId, setActiveCardId] = useState(cardsData[0].id);

  return (
    <div  id='features'>
      <div className={styles.headingContainer}>
        <h1 className={styles.mainHeading}>TOKEN UTILITIES</h1>
       
      </div>
      <div className={styles.cardsContainer}>
        {cardsData.map((card, index) => (
          <Card key={card.id} data={card} setActiveCardId={setActiveCardId} active={card.id === activeCardId} />
        ))}
      </div>
    </div>
  );
};

export default Info;