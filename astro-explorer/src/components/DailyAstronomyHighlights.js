import React, { useState, useEffect } from 'react';
import { fetchAstronomyPictureOfTheDay } from '../api'; // Import function to fetch astronomy picture data
import { addToFavorites } from '../utils/favoritesManager'; // Import function to add to favorites
import './SplashScreen.css'; // Import CSS styles for splash screen
import Navbar from './Navbar'; // Import Navbar component
import Footer from './Footer'; // Import Footer component
import { ToastContainer, toast } from 'react-toastify'; // Import components for toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Import CSS styles for toast notifications

// Component for displaying daily astronomy highlights
const DailyAstronomyHighlights = () => {
  // State to store the astronomy picture data
  const [astronomyPicture, setAstronomyPicture] = useState(null);

  // Effect hook to fetch astronomy picture data when component mounts
  useEffect(() => {
    // Function to fetch astronomy picture data asynchronously
    const fetchData = async () => {
      try {
        // Fetch astronomy picture data
        const pictureData = await fetchAstronomyPictureOfTheDay();
        // Set astronomy picture data in state
        setAstronomyPicture(pictureData);
      } catch (error) {
        // Log error if fetching data fails
        console.error('Error fetching astronomy picture:', error);
      }
    };

    // Call fetchData function
    fetchData();
  }, []);

  // Function to handle adding astronomy picture to favorites
  const handleAddToFavorites = (item) => {
    // Add astronomy picture to favorites
    addToFavorites(item);
    // Display success toast notification
    toast.success('Added to Favorites!', {
      style: {
        background: 'linear-gradient(to right, #41666C, #05A8C1)',
        color: '#F0F3F3'
      }
    });
  };

  // JSX content for DailyAstronomyHighlights component
  return (
    <div className='bg-gradient-radial from-[#030303] via-[#243b41] to-[#000000]'>
      {/* Render Navbar component */}
      <Navbar />
      {/* Container for astronomy highlights */}
      <div className="container mx-auto px-4 py-10  text-white daily-astronomy-highlights">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-4">Daily Astronomy Highlights</h2>
        {/* Render astronomy picture if available */}
        {astronomyPicture && (
          <div className="astronomy-picture py-4">
            {/* Astronomy picture title */}
            <h3 className="py-4 text-xl font-semibold mb-2">Astronomy Picture of the Day 🌌</h3>
            {/* Display astronomy picture */}
            <img src={astronomyPicture.url} alt={astronomyPicture.title} className="border rounded-3xl w-full h-auto mb-4" />
            {/* Display astronomy picture explanation */}
            <p className='py-4'>{astronomyPicture.explanation}</p>
            {/* Button to add to favorites */}
            <div className='flex justify-end'>
              <button onClick={() => handleAddToFavorites(astronomyPicture)} className="mt-4 bg-[#04563F] text-white px-4 py-2 rounded-xl mr-2">
                Add to Favorites
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Render Footer component */}
      <Footer />
    </div>
  );
};

// Export DailyAstronomyHighlights component
export default DailyAstronomyHighlights;
