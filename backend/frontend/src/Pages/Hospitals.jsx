import React, { useEffect, useState } from 'react'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from '@vis.gl/react-google-maps'
// @ts-ignore
const containerStyle = {
  width: '100%',
  height: '100vh'
}

export default function Hospitals () {
  const [lat, setLat] = useState('')
  const [log, setLog] = useState('')
  const [hospitals, setHospitals] = useState([])
  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const location = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject)
        })

        setLat(location.coords.latitude)
        setLog(location.coords.longitude)

        const placesApiKey = 'AIzaSyDDi-YNuHv2CxzymDJVgmfLxTEuvoihZWI'
        const radius = 50000
        //const placesApiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.coords.latitude},${location.coords.longitude}&radius=${radius}&type=hospital&key=${placesApiKey}`;
        const placesApiUrl = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.coords.latitude},${location.coords.longitude}&radius=${radius}&type=hospital&key=${placesApiKey}`

        const response = await fetch(placesApiUrl)

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`)
        }

        const data = await response.json()

        if (data.results) {
          setHospitals(data.results)
          console.log(data.results)
        }
      } catch (error) {
        console.error('Error fetching geolocation:', error)
      }
    }

    fetchGeolocation()
  }, [])

  const position = {
    lat: Number(lat),
    lng: Number(log)
  }

  return (
    <APIProvider apiKey='AIzaSyBXYoc8ktZ74dlhv6E_CUlp2maVTD5U0-E'>
      <div
        style={{
          height: '65.3vh'
        }}
      >
        <Map zoom={9} center={position} mapId='887a654104aa209e'>
          <AdvancedMarker position={position}>
            <Pin />
          </AdvancedMarker>
          {hospitals.map((hospital, index) => (
            <AdvancedMarker
              key={index}
              position={{
                lat: hospital.geometry.location.lat,
                lng: hospital.geometry.location.lng
              }}
            >
              <Pin />
            </AdvancedMarker>
          ))}
        </Map>
      </div>
    </APIProvider>
  )
}
