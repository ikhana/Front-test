import React, { Suspense, useRef, useMemo, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import circleImg from '../../assets/circle.png';
import headerImage from "./img34.jpeg";
import "./home.css"; // Assuming your CSS file is named home.css

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();

  let t = 0;
  let f = 0.002;
  let a = 3;
  const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }, [t, f, a]);

  const count = 100;
  const sep = 3;
  let positions = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph]);

  useFrame(() => {
    t += 15;

    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTex}
        color="#38bdf8"
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen overflow-hidden text-cybernoir-50 font-sans "
    style={{
      background: 'radial-gradient(circle at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 100%)'
    }}>
      <img
        src={headerImage}
        alt="Header"
        className="mt-10 lg:mt-0 rounded-full w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-96 2xl:h-96 transition-opacity duration-700 ease-in-out"
        style={{
          filter: 'drop-shadow(0 0 20px rgba(255, 163, 0, 0.9))'
        }}
      />
      <h1 className="absolute text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display text-angryduck-500 tracking-wide z-10"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -300%)' }}>
        Bit<span className="text-angryduck-300">Wit</span>
      </h1>
      <div className="absolute inset-x-0 bottom-10 md:bottom-8 lg:bottom-6 xl:bottom-4 text-center z-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">Your Digital Guide to Blockchain Mystery</h2>
        <p className="hidden md:block text-lg lg:text-xl xl:text-2xl">Unlock the world of cryptos with BitWit.</p>
        <div className="space-x-4 pt-4">
          <button className="btn inline-block py-1 px-3 md:py-2 md:px-5 lg:py-2 lg:px-6 xl:py-2 xl:px-8 text-sm md:text-base lg:text-lg xl:text-xl border-none rounded-full bg-angryduck-500 text-white cursor-pointer transition duration-300 ease-in-out hover:bg-angryduck-600 shadow-button-glow">
            WHITE PAPER
          </button>
          <button className="btn inline-block py-1 px-3 md:py-2 md:px-5 lg:py-2 lg:px-6 xl:py-2 xl:px-8 text-sm md:text-base lg:text-lg xl:text-xl border border-angryduck-500 rounded-full text-angryduck-500 bg-transparent cursor-pointer transition duration-300 ease-in-out hover:border-angryduck-600 hover:text-angryduck-600">
            EXPLORE BITWIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
