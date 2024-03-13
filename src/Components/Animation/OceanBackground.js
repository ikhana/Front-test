import React from 'react';

const OceanBackground = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 810"
      preserveAspectRatio="none"
      className="absolute inset-0 z-0 h-full w-full transition-all duration-1000 ease-in-out"
   
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#020D1A">
            <animate
              attributeName="stop-color"
              values="#020D1A; #041122; #020D1A"
              dur="10s"
              repeatCount="indefinite"
            />
          </stop>
          {/* ... (rest of the gradient stops and animations) ... */}
        </linearGradient>
        <filter id="turbulence" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05"
            numOctaves="2"
            seed="2"
            stitchTiles="stitch"
          />
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </defs>
      <rect
        x="0"
        y="0"
        width="1440"
        height="810"
        fill="url(#gradient)"
        filter="url(#turbulence)"
        className="absolute inset-0 z-0 h-full w-full"
      />
    </svg>
  );
};

export default OceanBackground;