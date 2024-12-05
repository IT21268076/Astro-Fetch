import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const SpaceWeatherAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Function to fetch space weather alerts
    const fetchSpaceWeatherAlerts = async () => {
      try {
        // Make API request to DONKI API
        const response = await axios.get('https://api.nasa.gov/DONKI/notifications?api_key=WtewiVSRwqmGbWS61tM0Fod967so34mrT9U4xkAg');
        // Update state with fetched data
        setAlerts(response.data);
      } catch (error) {
        console.error('Error fetching space weather alerts:', error);
      }
    };

    // Call the function to fetch alerts when the component mounts
    fetchSpaceWeatherAlerts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once

  const parseMessageBody = (messageBody) => {
    const attributes = {};
  
    // Extracting common attributes from message body
    const regex = /##\s([^:]+):\s(.+?)\n/g;
    let match;
    while ((match = regex.exec(messageBody)) !== null) {
      const [, key, value] = match;
      attributes[key] = value.trim();
    }
  
    // Extracting summary from message body
    const summaryStartIndex = messageBody.indexOf('## Summary:');
    const summaryEndIndex = messageBody.indexOf('## Notes:');
    const summary = messageBody.substring(summaryStartIndex + 11, summaryEndIndex).trim();
  
    // Divide the summary into specific attributes
    const summaryAttributes = parseSummaryAttributes(summary);
  
    return { summary: summaryAttributes, ...attributes };
  };
  
  const parseSummaryAttributes = (summary) => {
    // Here, you can further parse the summary to extract specific attributes
    // For example, you can split the summary by new lines and extract relevant information
    const lines = summary.split('\n');
    const summaryAttributes = {};
  
    lines.forEach((line) => {
      const [key, value] = line.split(':').map((item) => item.trim());
      summaryAttributes[key] = value;
    });
  
    return summaryAttributes;
  };
  

  return (
    <div class="h-auto bg-gradient-radial from-[#030303] via-[#243b41] to-[#000000]">
      <Navbar/>
      <h2 className="text-xl font-bold text-center text-red-200 my-8">Space Weather Alerts</h2>
      <p className='text-md p-4 ml-32 text-[#A9AEAD]'>All the alerts and messages about space weather are here. Keep updating. Click link for more information!</p>
      {alerts.map((alert, index) => {
        const { summary, ...otherAttributes } = parseMessageBody(alert.messageBody);
        return (
          <div key={index} className="rounded-3xl mx-32 bg-opacity-50 hover:bg-gray-800 p-10  mb-8 bg-gray-700 border border-gray-500">
            <h3 className="text-lg font-bold text-red-500 ">{alert.messageType} Message</h3>
            <span className='text-red-400 font-semibold'>Message Issue Time: </span> <span className='text-white px-8'>{alert.messageIssueTime}</span>
            <p className='mb-2'><span className='text-red-400 font-semibold mb-4'>Message URL: </span> <span className='text-white px-20'><a href={alert.messageURL}>{alert.messageURL}</a></span></p>
            <span className='text-red-400 font-semibold mb-4'>Content :</span>
            {/* Display parsed summary attributes */}
            {Object.entries(summary).map(([key, value]) => (
              <p className='text-white text-sm px-4 text-justify' key={key}>{key}: {value}</p>
            ))}
          </div>
        );
      })}
      <Footer/>
    </div>
  );
};

export default SpaceWeatherAlerts;
