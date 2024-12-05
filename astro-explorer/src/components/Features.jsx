// FeaturesSection.jsx
import React from 'react';
import { mdiRobot, mdiMap, mdiWeatherLightning } from '@mdi/react';
import Section from './Section';
import { Link } from 'react-router-dom';
import cam from '../assests/icons/feature/cam.png';
import weather from '../assests/icons/feature/weather.png';
import map from '../assests/icons/feature/map.png';
import rover from '../assests/icons/feature/rover.png';
import favorites from '../assests/icons/feature/favorites.png';

const features = [
  {
    title: "Astronomy Picture of the Day",
    description: "Explore the latest astronomy picture of the day, showcasing the beauty of space.",
    icon: cam,
    path: "/astronomy-picture-of-the-day",
  },
  {
    title: "Mars Rover Photos",
    description: "View high-resolution photos taken by the Mars rovers, providing insights into Martian landscapes.",
    icon: rover,
    path: "/categories-search",
  },
  {
    title: "Satellite Map",
    description: "Access real-time satellite imagery, useful for monitoring weather patterns, wildfires, and more.",
    icon: map,
    path: "/satellite-map",
  },
  {
    title: "Favorites",
    description: "View your favorites in astronomy here.",
    icon: favorites,
    path: "/favorites",
  },
  {
    title: "Space Weather Alerts",
    description: "Get in touch with space weather.",
    icon: weather,
    path: "/space-weather-alerts",
  },
];

const FeaturesSection = () => {
  console.log(features)
  return (
    <div className=''>
     <Section  title="Features" id="features">
      
       <div slot="lead">
       <span className="text-primary text-red-400">Astro Fetch </span> comes these features included with integrated of 
         <span className="text-primary text-red-400"> NASA API</span>.
       </div>
       <ul className="text-white grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          features.map(({ title, description, icon, path }) => (
            <li key={title} className="flex flex-col items-center gap-4 m-2 border border-default rounded-xl bg-offset p-6">
              <div className="size-16 rounded-xl border-2 border-current p-3">
                <img src={icon} alt={title} className="w-10" />
              </div>
              <p className="text-center font-extrabold text-xl">{title}</p>
              <p className="text-center text-offset text-sm">{description}</p>
              <Link to={path}>Learn More</Link> 
            </li>
          ))
        }
       </ul>
       
     </Section>
     </div>
  );
 };

export default FeaturesSection;
