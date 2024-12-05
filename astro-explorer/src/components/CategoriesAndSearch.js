// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactPaginate from 'react-paginate';
// import Navbar from './Navbar';
// import Footer from './Footer'
// import { addToFavorites } from '../utils/favoritesManager';

// const MarsRoverPhotos = () => {
//   const [photos, setPhotos] = useState([]);
//   const [filteredPhotos, setFilteredPhotos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [earthDateRange, setEarthDateRange] = useState({
//     start: '',
//     end: ''
//   });

//   const [isHovered, setIsHovered] = useState(false);
//   const itemsPerPage = 25;

//   useEffect(() => {
//     const fetchManifest = async () => {
//       try {
//         const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity', {
//           params: {
//             api_key: 'WtewiVSRwqmGbWS61tM0Fod967so34mrT9U4xkAg' // Replace with your API key
//           }
//         });

//         const { photo_manifest } = response.data;
//         const earthDates = photo_manifest.photos.map(photo => photo.earth_date);
//         const uniqueEarthDates = [...new Set(earthDates)];
//         setEarthDateRange({
//           start: uniqueEarthDates[0],
//           end: uniqueEarthDates[uniqueEarthDates.length - 1]
//         });
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchManifest();
//   }, []);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
//           params: {
//             earth_date: `${earthDateRange.start}/${earthDateRange.end}`,
//             page: currentPage,
//             api_key: 'WtewiVSRwqmGbWS61tM0Fod967so34mrT9U4xkAg' // Replace with your API key
//           }
//         });

//         const { photos } = response.data;
//         const totalPhotos = photos.length;
//         setPhotos(photos);
//         setFilteredPhotos(photos.slice(0, itemsPerPage));
//         setTotalPages(Math.ceil(totalPhotos / itemsPerPage));
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (earthDateRange.start && earthDateRange.end) {
//       fetchPhotos();
//     }
//   }, [currentPage, earthDateRange]);

//   const handlePageChange = ({ selected }) => {
//     setCurrentPage(selected + 1);
//   };

//   const handleSearch = () => {
//     setCurrentPage(1);
//   };

//   const handleStartDateChange = (e) => {
//     setEarthDateRange({ ...earthDateRange, start: e.target.value });
//   };

//   const handleEndDateChange = (e) => {
//     setEarthDateRange({ ...earthDateRange, end: e.target.value });
//   };

//   const handleAddToFavorite = (photo) => {
//     addToFavorites(photo);
//   };

//   return (
//     <div className='bg-gradient-to-r from-[#000000]  to-[#434343]...'>
//       <Navbar/>
//       <div className="container mx-auto px-4 py-8 text-white">
//       <h1 className="text-3xl font-bold text-center">Mars Rover Photos</h1>
//         {loading && <p>Loading...</p>}
//         {error && <p>Error: {error}</p>}
//         <div className="mb-4 flex justify-between items-center mt-6">
//         <p className='font-bold'>You can search with earth dates <span role="img" aria-label="calendar">&#128125;</span></p>
//           <div>
//             <input
//               type="date"
//               value={earthDateRange.start}
//               onChange={handleStartDateChange}
//               placeholder="Start Date (YYYY-MM-DD)"
//               className="mr-2 px-2 py-1 rounded border text-gray-500"
//             />
//             <input
//               type="date"
//               value={earthDateRange.end}
//               onChange={handleEndDateChange}
//               placeholder="End Date (YYYY-MM-DD)"
//               className="mr-2 px-2 py-1 rounded border text-gray-500"
//             />
//             <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded">Search</button>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-4">
//           {filteredPhotos.map((photo) => (
//             <div key={photo.id} className="relative ">
//               <img
//                 src={photo.img_src}
//                 alt={photo.id}
//                 className="w-full h-auto rounded-3xl shadow-xl hover:opacity-40"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               />
//               <div className="absolute bottom-0 right-0">
//                 <button onClick={() => handleAddToFavorite(photo)} className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl">Add to Favorites</button>
//               </div>
//               <div
//                 className="details absolute text-md top-20 left-20 p-4 bg-black bg-opacity-70 rounded-3xl p-8"
//                 style={isHovered? { visibility: 'visible', opacity: 1 } : { visibility: 'hidden', opacity: 0 }}
//               >
//                 <span className="block">Camera : {photo.camera.name}</span>
//                 <span className="block">Rover  : {photo.rover.name}</span>
//                 <span className="block">Launch Date : {photo.rover.launch_date}</span>
//                 <span className="block">Landing Date : {photo.rover.landing_date}</span>
//                 <span className="block">Status : {photo.rover.status}</span>
//                 <span className="block">Sol : {photo.rover.max_sol}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <ReactPaginate
//           pageCount={totalPages}
//           pageRangeDisplayed={5}
//           marginPagesDisplayed={2}
//           onPageChange={handlePageChange}
//           containerClassName="pagination"
//           previousLabel="Previous"
//           nextLabel="Next"
//           activeClassName="active"
//         />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MarsRoverPhotos;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Navbar from './Navbar';
import Footer from './Footer';
import { addToFavorites } from '../utils/favoritesManager';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MarsRoverPhotos = () => {
  // State variables
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [earthDateRange, setEarthDateRange] = useState({
    start: '',
    end: '',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const itemsPerPage = 25;

  // Fetch Mars rover manifest data on component mount
  useEffect(() => {
    const fetchManifest = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity',
          {
            params: {
              api_key: 'WtewiVSRwqmGbWS61tM0Fod967so34mrT9U4xkAg',
            },
          }
        );

        // Extract unique earth dates from manifest data
        const { photo_manifest } = response.data;
        const earthDates = photo_manifest.photos.map(
          (photo) => photo.earth_date
        );
        const uniqueEarthDates = [...new Set(earthDates)];
        // Set initial earth date range
        setEarthDateRange({
          start: uniqueEarthDates[0],
          end: uniqueEarthDates[uniqueEarthDates.length - 1],
        });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchManifest();
  }, []);

  // Fetch photos based on selected earth date range and current page
  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
          {
            params: {
              earth_date: `${earthDateRange.start}/${earthDateRange.end}`,
              page: currentPage,
              api_key: 'WtewiVSRwqmGbWS61tM0Fod967so34mrT9U4xkAg',
            },
          }
        );

        // Extract photos and calculate total pages for pagination
        const { photos } = response.data;
        const totalPhotos = photos.length;
        setPhotos(photos);
        setTotalPages(Math.ceil(totalPhotos / itemsPerPage));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch photos if earth date range is selected
    if (earthDateRange.start && earthDateRange.end) {
      fetchPhotos();
    }
  }, [currentPage, earthDateRange]);

  // Filter photos based on search query and update filtered photos
  useEffect(() => {
    const filtered = photos.filter((photo) => {
      const cameraNameMatch = photo.camera.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const roverNameMatch = photo.rover.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return cameraNameMatch || roverNameMatch;
    });
    const offset = (currentPage - 1) * itemsPerPage;
    setFilteredPhotos(filtered.slice(offset, offset + itemsPerPage));
  }, [searchQuery, photos, currentPage]);

  // Handle page change event
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  // Handle search button click
  const handleSearch = () => {
    setCurrentPage(1);
  };

  // Handle start date change event
  const handleStartDateChange = (e) => {
    setEarthDateRange({ ...earthDateRange, start: e.target.value });
  };

  // Handle end date change event
  const handleEndDateChange = (e) => {
    setEarthDateRange({ ...earthDateRange, end: e.target.value });
  };

  // Handle search query change event
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle adding photo to favorites
  const handleAddToFavorite = (photo) => {
    addToFavorites(photo);
    toast.success('Added to Favorites!', {
      style: {
        background: 'linear-gradient(to right, #41666C, #05A8C1)',
        color: '#F0F3F3' 
      }
    });
  };

  // JSX content for MarsRoverPhotos component
  return (
    <div className='h-full bg-gradient-radial from-[#030303] via-[#243b41] to-[#000000]'>
      <Navbar />
      <div className='container mx-auto px-4 py-8 text-white'>
        <h1 className='text-3xl font-bold text-center'>Mars Rover Photos</h1>
        {loading && <p className='text-center text-2xl font-bold pt-16'>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className='mb-8 flex flex-col sm:flex-row justify-between items-center mt-6 '>
          <p className='font-bold mb-4 sm:mb-0'>
            You can search with earth dates{' '}
            <span role='img' aria-label='calendar'>
              &#128125;
            </span>
          </p>
          <div className='flex flex-col sm:flex-row'>
            <input
              type='date'
              value={earthDateRange.start}
              onChange={handleStartDateChange}
              placeholder='Start Date (YYYY-MM-DD)'
              className='mr-2 mb-2 sm:mb-0 px-2 py-1 rounded border text-gray-500'
            />
            <input
              type='date'
              value={earthDateRange.end}
              onChange={handleEndDateChange}
              placeholder='End Date (YYYY-MM-DD)'
              className='mr-2 mb-2 sm:mb-0 px-2 py-1 rounded border text-gray-500'
            />
            <button
              onClick={handleSearch}
              className='px-4 py-2 bg-blue-500 text-white rounded mb-2'
            >
              Search
            </button>
          </div>
          <div className='flex flex-col sm:flex-row'>
            <input
              type='text'
              value={searchQuery}
              onChange={handleSearchQueryChange}
              placeholder='Search by Camera or Rover Name'
              className='mr-4 px-2 py-1 w-full sm:w-64 rounded border text-gray-500 mb-2 sm:mb-0'
            />
            <button
              onClick={handleSearch}
              className='px-4 py-2 bg-blue-500 text-white rounded'
            >
              Search
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className='relative '>
              <img
                src={photo.img_src}
                alt={photo.id}
                className='w-full border h-96 rounded-3xl shadow-xl hover:opacity-40'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              <div className='absolute bottom-0 right-0'>
                <button
                  onClick={() => handleAddToFavorite(photo)}
                  className='bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl'
                >
                  Add to Favorites
                </button>
              </div>
              <div
                className='details absolute text-md top-16 bottom-16 left-14 right-14 px-8 py-10 bg-black bg-opacity-70 rounded-3xl '
                style={
                  isHovered
                    ? { visibility: 'visible', opacity: 1 }
                    : { visibility: 'hidden', opacity: 0 }
                }
              >
                <span className='block font-bold'>{photo.camera.full_name} - {photo.camera.name}</span>
                <span className='block'>Rover : {photo.rover.name}</span>
                <span className='block'>
                  Launch Date : {photo.rover.launch_date}
                </span>
                <span className='block'>
                  Landing Date : {photo.rover.landing_date}
                </span>
                <span className='block'>Status : {photo.rover.status}</span>
                <span className='block'>Sol : {photo.rover.max_sol}</span>
              </div>
            </div>
          ))}
        </div>
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName='pagination'
          previousLabel='Previous'
          nextLabel='Next'
          activeClassName='active'
        />
      </div>
      <Footer />
    </div>
  );
};

export default MarsRoverPhotos;
