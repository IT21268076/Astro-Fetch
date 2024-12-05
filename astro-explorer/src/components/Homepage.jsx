import React from 'react';
import SplashScreen from './SplashScreen'; // Import your Header component
import FeaturesSection from './Features'; // Import your FeaturesSection component
import IntroSection from './IntroSection'; // Import your AboutSection component
import Footer from './Footer';

const HomePage = () => {
 return (
    <div>
      <SplashScreen />
      <div className='h-full bg-gradient-radial from-[#030303] via-[#243b41] to-[#000000]'>
        <IntroSection />
        <FeaturesSection />
      </div>
      <Footer/>
    </div>
 );
};

export default HomePage;
