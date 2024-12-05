// IntroSection.jsx
import React from 'react';
import Section from './Section'; 
import { Link } from 'react-router-dom';


const IntroSection = () => {
 return (
    <Section title="Just Explore" id="intro">
      <div slot="lead">
        AstroFetch is a new kind of <span className="text-primary"> Space Explorer </span> for the
        <span className="text-primary">Astronomers.</span>
      </div>
      <div className="text-white grid grid-cols-1 gap-2 sm:grid-cols-2">
        <a
          href="https://www.nasa.gov/setmo/articles/"
          className="flex items-center justify-center gap-3 border-2 border-current px-6 py-4"
        >
          <span>Read the Articles</span>
        </a>
        <a
          href="https://astro.new/"
          className="flex items-center justify-center gap-3 border-2 border-current px-6 py-4"
        >
          <Link to="/features" >Try it out</Link>
        </a>
      </div>
    </Section>
 );
};

export default IntroSection;
