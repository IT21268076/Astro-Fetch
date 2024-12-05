import React, { useState, useEffect } from 'react';
import astronautImage from '../assests/astronaut.png';
import logoImage from '../assests/astro-fetch-logo.png';
import Starfield from './Starfield';

const SplashScreen = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0 && currentPosition > lastScrollPosition) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      setLastScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen bg-black">
      <Starfield />
      <div id="splash-bg-fallback" className="absolute inset-0 hidden opacity-40"></div>
      <div className="relative grid h-full place-items-center sm:grid-cols-2">
        <h2 className="flex flex-col items-center gap-2 self-end sm:gap-4 sm:self-auto sm:justify-self-end">
          <img src={logoImage} className='h-64 -mt-24 -mb-16'/>
          <div className="gradient-text text-center font-bold tracking-tighter text-6xl md:text-8xl">
            Explore <br /> the world of, <br /> Unseen.
          </div>
        </h2>
        <div id="astronaut" className="w-2/3 max-w-3xl self-start sm:w-10/12 sm:self-auto sm:justify-self-start">
          <img className="h-full w-full object-cover" src={astronautImage} alt="A floating astronaut in a space suit" />
        </div>
      </div>
      <nav className={`fixed bottom-0 left-0 w-full bg-transparent flex justify-between text-lg items-center p-4 z-50 ${scrollingUp ? '' : 'hidden'}`}>
        <div>
          <img src={logoImage} alt="Logo" className="h-16"/>
        </div>
        <div className="flex gap-8 pr-10">
          <button onClick={scrollToFeatures} className="features-button text-white">Features</button>
          <a href="#articles" className="text-white">Articles</a>
        </div>
      </nav>
    </section>
  );
};

export default SplashScreen;
