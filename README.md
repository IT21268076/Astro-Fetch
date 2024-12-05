[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/V1F4A3D5)

# Astro Fetch - A React app using Nasa API

## Overview

Astro Fetch is a React application designed to display astronomical information with images from the NASA API with tailwind css. This project showcases how to fetch and display data from an external API within a React application, focusing on satellite map, mars rover, astronomy pic of the day, favorite functionality with session mangement and related information.

https://github.com/sliitcsse/se3040-assignment02-IT21268076/assets/99285844/893b139c-e9fe-4e3a-b202-832548d0c197

## Deployment

Deployed in Netlify
AstroFetch is deployed and accessible through this link !
- https://nasa-astro-fetch.netlify.app 🚀
  
## Features

- **Astronomy Picture of the day:** Users can see astronomy pic of the day regularly and details of it and can add to favorites each day.
- **Mars rover:** Users can view mars rover images with details and by filtering and searching by cameras, dates and rovers and also can add to favorites.
- **Interactive Sattelite Map:** Users can explore satellite positions through a mapa nd can get details and images.
- **Session Management:** Favorite images with details are added o browsers session storage and user canview and , add and remove anytime just by one click.
- **Data Fetching:** Dynamically fetch satellite data from the NASA API and display it in a user-friendly manner.
- **Responsive Design:** Ensure the application is responsive and provides a good user experience across different devices.

## Security
- Sensitive data are not stired in sessions
  
## Setup Instructions

1. **Clone Repository:**
   Clone the repository to your local machine using the following command:
   ```bash
   git clone <repository-url>


2. Set up the forntend:

    ```bash
    cd assignment-02-IT21268076/astro-explorer
    npm install
    ```

3. API Key

   Replace your api key from NASA API in api.js file
   
3. Run:

    ```bash
    npm start
    ```
      
   The backend server will be running at `http://localhost:3000`. you can change port in .env file

## Testing

- Both Unit and Integration testing done with react testing library no need to install any additional libraries

1. **Unit testing:**

   Run:
   ```bash
   npm test
   ```

2. **Integrration testing**
   
   Run
   ```bash
   npm test
   ```

# NASA API Integration Documentation

## Introduction

This documentation provides guidance on integrating various NASA APIs with Astro Fetch React App.

**Used NASA API endpoints**
- APOD: Astronomy Picture of the Day
- Mars Rover Photos: Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars
- Mission Manifest: A mission manifest is available for each Rover at /manifests/rover_name. This manifest will list details of the Rover's mission to help narrow down photo queries to the API.
- Satellite Situation Center: System to cast geocentric spacecraft location information into a framework of (empirical) geophysical regions
- DONKI: Space Weather Database Of Notifications, Knowledge, Information

## Prerequisites

Before integrating the NASA APIs into your React application, ensure the following prerequisites are met:

- Node.js and npm are installed on your system.
- Basic knowledge of React and JavaScript.

## Getting Started

1. **Set Up a React Application**: If you haven't already, set up a React application using Create React App or any other method of your choice.

2. **Install Dependencies**: Install the necessary dependencies for making HTTP requests and managing state.

3. **API Key**: Obtain an API key from NASA API's official website. This key will be used to authenticate your requests.

## Integrating APIs

1. **Astronomy Picture of the Day (APOD) with favorite session**
   - **Endpoint**: `GET https://api.nasa.gov/planetary/apod`
   - **Description**: Retrieves the Astronomy Picture of the Day along with relevant details.
   - **Usage**: `https://api.nasa.gov/planetary/apod?api_key=Demo_Key`

2. **Mars Rover Photos with favorite session, querying, search, and filtering**
   - **Endpoint**: `GET https://api.nasa.gov/mars-photos/api/v1/rovers/{rover}/photos`
   - **Description**: Retrieves photos taken by the Mars rovers with the facility to search and filter by rover name, camera name, and Earth dates.
   - **Usage**:
     ```javascript
     'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
     {
       params: {
         earth_date: `${earthDateRange.start}/${earthDateRange.end}`,
         page: currentPage,
         api_key: 'WtewiVSRwqmGbWS61tM0Fod967so34mrT9U4xkAg',
       },
     }
     ```

3. **Mars Rover Manifest**
   - **Endpoint**: `GET https://api.nasa.gov/mars-photos/api/v1/manifests/{rover}`
   - **Description**: Retrieves the mission manifest for a Mars rover.
   - **Usage**:
     ```javascript
     'https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity',
     {
       params: {
         api_key: 'Demo_Key',
       },
     }
     ```

4. **Space Weather Alerts**
   - **Endpoint**: `GET https://api.nasa.gov/DONKI/notifications`
   - **Description**: Retrieves space weather alerts issued by NASA.
   - **Usage**: `https://api.nasa.gov/DONKI/notifications?api_key=Demo_Key`

5. **Satellite Positions**
   - **Endpoint**: `GET https://api.nasa.gov/ISS-Tracker/Space_Station/TrackThisCraft`
   - **Description**: Retrieves the current position of satellites.
   - **Usage**: `https://api.nasa.gov/ISS-Tracker/Space_Station/TrackThisCraft`

