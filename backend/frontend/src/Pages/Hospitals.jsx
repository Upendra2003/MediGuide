// import React, { useEffect, useState } from 'react'
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow
// } from '@vis.gl/react-google-maps'
// // @ts-ignore
// const containerStyle = {
//   width: '100%',
//   height: '100vh'
// }

// export default function Hospitals () {
//   const [lat, setLat] = useState('')
//   const [log, setLog] = useState('')
//   const [hospitals, setHospitals] = useState([])
//   useEffect(() => {
//     const fetchGeolocation = async () => {
//       try {
//         const location = await new Promise((resolve, reject) => {
//           navigator.geolocation.getCurrentPosition(resolve, reject)
//         })

//         setLat(location.coords.latitude)
//         setLog(location.coords.longitude)

//         const placesApiKey = 'AIzaSyDDi-YNuHv2CxzymDJVgmfLxTEuvoihZWI'
//         const radius = 50000
//         //const placesApiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.coords.latitude},${location.coords.longitude}&radius=${radius}&type=hospital&key=${placesApiKey}`;
//         const placesApiUrl = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.coords.latitude},${location.coords.longitude}&radius=${radius}&type=hospital&key=${placesApiKey}`

//         const response = await fetch(placesApiUrl)

//         if (!response.ok) {
//           throw new Error(`Failed to fetch: ${response.status}`)
//         }

//         const data = await response.json()

//         if (data.results) {
//           setHospitals(data.results)
//           console.log(data.results)
//         }
//       } catch (error) {
//         console.error('Error fetching geolocation:', error)
//       }
//     }

//     fetchGeolocation()
//   }, [])

//   const position = {
//     lat: Number(lat),
//     lng: Number(log)
//   }

//   return (
//     <APIProvider apiKey='AIzaSyBXYoc8ktZ74dlhv6E_CUlp2maVTD5U0-E'>
//       <div
//         style={{
//           height: '65.3vh'
//         }}
//       >
//         <Map zoom={9} center={position} mapId='887a654104aa209e'>
//           <AdvancedMarker position={position}>
//             <Pin />
//           </AdvancedMarker>
//           {hospitals.map((hospital, index) => (
//             <AdvancedMarker
//               key={index}
//               position={{
//                 lat: hospital.geometry.location.lat,
//                 lng: hospital.geometry.location.lng
//               }}
//             >
//               <Pin />
//             </AdvancedMarker>
//           ))}
//         </Map>
//       </div>
//     </APIProvider>
//   )
// }

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Hospitals = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const location = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const latitude = location.coords ? location.coords.latitude : 40.7128; // Default to New York if no location is available
        const longitude = location.coords ? location.coords.longitude : -74.0060; // Default to New York if no location is available

        // Create map only if it's not already created
        if (!mapRef.current) {
          const map = L.map('mapid').setView([latitude, longitude], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
          mapRef.current = map;

          // Add marker for user's location
          L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Your Location')
            .openPopup();

          // Fetch hospitals using Overpass API with increased radius
          const radius = 5000; // Increase the radius to 10,000 meters (10 kilometers)
          const response = await fetch(`https://lz4.overpass-api.de/api/interpreter?data=[out:json];(node["amenity"="hospital"](around:${radius},${latitude},${longitude}););out;`);
          const data = await response.json();
          console.log(data)
          // Add hospital markers to the map
          data.elements.forEach(element => {
            const marker = L.marker([element.lat, element.lon]).addTo(map);
            marker.bindPopup(element.tags.name || 'Hospital');
          });
        }
      } catch (error) {
        console.error('Error fetching geolocation:', error);
      }
    };

    fetchGeolocation();
  }, []);

  return (
    <div id="mapid" style={{ height: '400px' }}></div>
  );
};

export default Hospitals;











