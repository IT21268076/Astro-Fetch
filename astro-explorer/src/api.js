// src/api.js
// api.js
const NASA_API_KEY = 'WtewiVSRwqmGbWS61tM0Fod967so34mrT9U4xkAg'; // Replace with your actual NASA API key

// Fetch photos from the Mars Rover Photos API
export const fetchRoverPhotos = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch rover photos');
      }
      const data = await response.json();
      return data.photos;
    } catch (error) {
      console.error('Error fetching rover photos:', error);
      return [];
    }
  };
  
  // Fetch mission manifest from the Mars Rover Manifest API
  export const fetchRoverManifest = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=${NASA_API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch rover manifest');
      }
      const data = await response.json();
      return data.photo_manifest;
    } catch (error) {
      console.error('Error fetching rover manifest:', error);
      return null;
    }
  };
  
  // Fetch Astronomy Picture of the Day (APOD)
  export const fetchAPOD = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch APOD');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching APOD:', error);
      return null;
    }
  };

// export const fetchMissions = async () => {
//   try {
//     const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch mission data');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching mission data:', error);
//     return null;
//   }
// };

// export const fetchMissionDetails = async (missionId) => {
//     try {
//       const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos/${missionId}?api_key=${API_KEY}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch mission details');
//       }
//       const data = await response.json();
//       // Extract relevant details from the response and return them
//       return {
//         name: data.name,
//         launch_date: data.launch_date,
//         destination: data.destination,
//         objectives: data.objectives,
//         img_src: data.img_src
//       };
//     } catch (error) {
//       console.error('Error fetching mission details:', error);
//       return null;
//     }
// };


export const fetchAstronomyPictureOfTheDay = async () => {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=WtewiVSRwqmGbWS61tM0Fod967so34mrT9U4xkAg');
    const data = await response.json();
    return data;
};
   
export const fetchMarsRoverPhotos = async () => {
    const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=WtewiVSRwqmGbWS61tM0Fod967so34mrT9U4xkAg&sol=1000');
    const data = await response.json();
    return data;
};


   