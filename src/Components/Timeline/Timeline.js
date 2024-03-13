import React, { useEffect } from 'react';
import './Timeline.scss';

const TImeline = () => {
  useEffect(() => {
    const throttle = (type, name, obj) => {
      obj = obj || window;
      let running = false;
      const func = () => {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(() => {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };

    throttle('resize', 'optimizedResize');

    const roadmap = (() => {
      const wrapper = document.querySelector('.js-roadmap-timeline');
      const timeframes = document.querySelectorAll('.js-roadmap-timeframe');
      const mediaQuery = window.matchMedia('(min-width: 1201px)');
      let topMaxHeight;
      let bottomMaxHeight;

      const handleStyling = () => {
        if (mediaQuery.matches) {
          applyHeights();
          styleWrapper();
        } else {
          clearWrapperStyling();
        }
      };

      const applyHeights = () => {
        topMaxHeight = getMaxHeight(timeframes, 0);
        bottomMaxHeight = getMaxHeight(timeframes, 1);
      };

      const getMaxHeight = (els, start) => {
        let maxHeight = 0;
        for (let i = start; i < els.length - 1; i += 2) {
          const elHeight = els[i].offsetHeight;
          maxHeight = Math.max(maxHeight, elHeight);
        }
        return maxHeight;
      };

      const styleWrapper = () => {
        wrapper.style.paddingBottom = `${bottomMaxHeight}px`;
        wrapper.style.paddingTop = `${topMaxHeight}px`;
      };

      const clearWrapperStyling = () => {
        wrapper.style.paddingBottom = '';
        wrapper.style.paddingTop = '';
      };

      handleStyling();
      window.addEventListener('optimizedResize', handleStyling);
    })();
  }, []);

  return (
    <div className="roadmap">
      <div className="roadmap-bg"></div>
      <h1 className="roadmap-title">Roadmap</h1>
      <ol className="roadmap-timeline js-roadmap-timeline">
        <li className="roadmap-timeframe js-roadmap-timeframe">
          <div className="roadmap-date">May 2024</div>
          <svg
            className="roadmap-swirly"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="none"
            viewBox="-2 0 54 80"
          >
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
          </svg>

          <ul className="roadmap-events">
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              BITWIT Launch: The Genesis of a New Digital Currency
            </li>
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              BITWIT officially enters the crypto market, offering innovative
              transaction solutions and a robust platform for growth and
              investment.
            </li>
          </ul>
        </li>

        <li className="roadmap-timeframe js-roadmap-timeframe">
          <div className="roadmap-date">July 2024</div>
          <svg
            className="roadmap-swirly"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="none"
            viewBox="-2 0 54 80"
          >
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
          </svg>
          <ul className="roadmap-events">
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              Strategic Partnerships: Expanding Horizons
            </li>
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              Forming alliances with key fintech players, BITWIT aims to
              broaden its ecosystem and enhance its technological
              infrastructure.
            </li>
          </ul>
        </li>

        <li className="roadmap-timeframe js-roadmap-timeframe">
          <div className="roadmap-date">September 2024</div>
          <svg
            className="roadmap-swirly"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="none"
            viewBox="-2 0 54 80"
          >
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
          </svg>
          <ul className="roadmap-events">
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              Community Growth: Cultivating the BITWIT Family
            </li>
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              Through community events and incentives, we focus on growing our
              user base and fostering a supportive network of BITWIT
              enthusiasts.
            </li>
          </ul>
        </li>

        <li className="roadmap-timeframe js-roadmap-timeframe">
          <div className="roadmap-date">December 2024</div>
          <svg
            className="roadmap-swirly"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="none"
            viewBox="-2 0 54 80"
          >
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
          </svg>
          <ul className="roadmap-events">
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              BITWIT Wallet Release: Your Crypto, Your Control
            </li>
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              Launch of the BITWIT Wallet, providing a secure and
              user-friendly environment for managing and trading BITWIT tokens.
            </li>
          </ul>
        </li>

        <li className="roadmap-timeframe js-roadmap-timeframe">
          <div className="roadmap-date">March 2025</div>
          <svg
            className="roadmap-swirly"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="none"
            viewBox="-2 0 54 80"
          >
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
          </svg>
          <ul className="roadmap-events">
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              Governance Protocol: Empowering Token Holders
            </li>
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              Introduction of governance protocols, giving BITWIT token holders
              a voice in the project's future developments and decisions.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default TImeline;
