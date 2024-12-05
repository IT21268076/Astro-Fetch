import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import Navbar from './Navbar';
import Footer from './Footer';
import './SatelliteMap.css'
import icon from '../assests/icons/pin.png';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported
import L from 'leaflet'; // Import Leaflet for creating custom icons

const SatelliteMap = () => {
 const [satellites, setSatellites] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetch('https://epic.gsfc.nasa.gov/api/natural')
      .then(response => response.json())
      .then(data => {
        setSatellites(data);
        setLoading(false);
      });
 }, []);

 const position = [51.505, -0.09]; // Default position

 // Custom icon for the marker
 const customIcon = L.icon({
    iconUrl: icon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
 });

 // Check if data is loaded before rendering the map
 if (loading) {
    return <div>Loading...</div>;
 }

 return (
    <div className='h-full bg-gradient-radial from-[#030303] via-[#243b41] to-[#000000] '>
      <Navbar/>
      <h1 className='text-red-200 text-xl text-center  p-6'>Satellite Map</h1>
      <div className="flex justify-center items-center h-screen mt-12">
        <div className="w-full h-full mx-16  px-0 pb-12 sm:px-6 lg:px-8 map-container mb-24">
          <MapContainer 
            center={position} 
            zoom={2} 
            style={{ height: "100vh", width: "100%"}}
            dragging={true} // Allow dragging
            touchZoom={false} // Disable touch zoom
            doubleClickZoom={true} // Disable double click zoom
            scrollWheelZoom={true} // Disable scroll wheel zoom
            zoomControl={false} // Hide zoom control
          >
            <TileLayer
              url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hrODI5OCIsImEiOiJjbHZtcHZ1eGowNHhsMmltMHhodjNhOGtqIn0.wrPrk01Xy4wF4ggqzlfycQ"
              attribution='&copy; <a href="http://mapbox.com">Mapbox</a>'
              id="mapbox/dark-v10"
              tileSize={512}
              zoomOffset={-1}
            />
            {satellites.map((satellite, index) => (
            <Marker 
                key={index} 
                position={[satellite.centroid_coordinates.lat, satellite.centroid_coordinates.lon]}
                icon={customIcon}
            >
                <Popup>
                <h3>{satellite.caption}</h3>
                <p>Identifier: {satellite.identifier}</p>
                <p>Date: {satellite.date}</p>
                <p>Latitude: {satellite.centroid_coordinates.lat}</p> 
                <p>Longitude: {satellite.centroid_coordinates.lon}</p>
                {/* Display the image */}
                <img src={`https://epic.gsfc.nasa.gov/archive/natural/${satellite.date.split(' ')[0].replace(/-/g, '/')}/png/${satellite.image}.png`} alt={satellite.caption} style={{ width: '100%', height: 'auto' }} />
                </Popup>
            </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      <Footer/>
    </div>
 ); 
};

export default SatelliteMap;
