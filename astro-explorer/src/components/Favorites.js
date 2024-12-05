import React, { useState, useEffect } from 'react';
import { getSessionData } from '../utils/sessionManager';
import Navbar from './Navbar';
import { removeFromFavorites } from '../utils/favoritesManager';

const Favorites = () => {
  // State variable to store favorites
  const [favorites, setFavorites] = useState([]);

  // Fetch favorites from session storage on component mount
  useEffect(() => {
    const fetchFavorites = () => {
      const savedFavorites = getSessionData('favorites');
      if (savedFavorites) {
        setFavorites(savedFavorites);
      }
    };

    fetchFavorites();
  }, []);

  // Handle removing favorite item
  const handleRemoveFavorite = (itemId) => {
    removeFromFavorites(itemId);
    setFavorites(favorites.filter((item) => item.id !== itemId));
  };

  // JSX content for Favorites component
  return (
    <div className='h-full bg-gradient-radial from-[#030303] via-[#243b41] to-[#000000]'>
      <Navbar />
  
      <div className="favorites text-white p-4 rounded-lg shadow-md sm:px-6 lg:px-8 xl:px-32">
        <h2 className="text-2xl font-bold text-center mb-4">My Favorites</h2>
        {favorites.length > 0 ? (
          favorites.map((favorite, index) => (
            <div key={index} className="favorite-item">
              {favorite.rover && favorite.rover.name ? ( // Check if favorite is rover type
                <>
                  <img
                    src={favorite.url || favorite.img_src}
                    alt={favorite.title}
                    className="mt-10 w-full h-auto mb-4 shadow-lg rounded-3xl"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-[#EC0101]">
                    {favorite.title || favorite.camera.full_name}
                  </h3>
                  
                  <div className="p-6">
                    <h5 className="text-lg font-semibold">
                    <span className='text-gray-300'>Rover : </span>  {favorite.rover.name}
                    </h5>
                    <p className=" "><span className='text-gray-500'>Earth Date : </span> {favorite.earth_date}</p>
                    <p className=" "><span className='text-gray-500'>Landing Date : </span> {favorite.rover.landing_date}</p>
                    <p className=" "><span className='text-gray-500'>Launch Date : </span> {favorite.rover.launch_date}</p>
                    <p className=" "><span className='text-gray-500'>Rover Status : </span> {favorite.rover.status}</p>
                  </div>
                  
                  <div className='flex justify-end mr-10'>
                    <button
                      onClick={() => handleRemoveFavorite(favorite.id)}
                      className="bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl "
                    >
                      Remove Favorite
                    </button>
                  </div>
                </>
              ) : ( // If not rover type, assume it's explanation type
                <>
                  <img
                    src={favorite.url}
                    alt={favorite.title}
                    className="mt-10 w-full h-auto mb-4 shadow-lg rounded-3xl"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-[#EC0101]">
                    {favorite.title}
                  </h3>
                  <div className="px-6 ">
                    <p className='pb-2'><span className='text-gray-500 '>Captured : </span> {favorite.date}</p>
                    <p className=''>{favorite.explanation}</p>
                  </div>
                  
                  <div className='flex justify-end mr-10'>
                    <button
                      onClick={() => handleRemoveFavorite(favorite.id)}
                      className="bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl "
                    >
                      Remove Favorite
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No favorites found.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
