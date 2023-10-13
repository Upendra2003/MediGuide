import React,{useEffect, useMemo} from 'react'
import { GoogleMap, useLoadScript,Marker } from '@react-google-maps/api';
import useGeolocation from '../hooks/useGeolocation'

const containerStyle={
    width:'100%',
    height:'100vh'
}



export default function Hospitals() {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey:import.meta.env.REACT_APP_GOOGLE_MAP_API_KEY,
      });
    //   console.log(import.meta.env.REACT_APP_GOOGLE_MAP_API_KEY)
    

    if(!isLoaded) return <div>Loading...</div>
    return (
        <>
            <h1 className=' text-center font-bold text-3xl'>Nearby Hospitals</h1> 
            <Map/>
        </>
    )
}


function Map(){
    const location = useGeolocation();
    let lat,lng;

    if(location.loaded){
        lat=location.cooordinates.lat;
        lng=location.cooordinates.lng;
    }

    const center=useMemo(()=>({lat:+lat,lng:+lng}),[]);

    const nearbyHospitals = async()=>{
        let response = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
        lat +
        ',' +
        lng +
        '&radius=' +
        4*1000 +
       '&type=' +
       "hospital" +
        '&key=' +
        'AIzaSyACzsQipQDZeYAPAK6c5FX-Rwv1Tb5hBAo');
        let data = response.json();
        console.log(data)
        
    }
    // console.log(import.meta.env.REACT_APP_GOOGLE_MAP_API_KEY)
    useEffect(()=>{
        nearbyHospitals()
    })
    return(
        <>
        <p className=' '>{lat} {lng}</p>
        <GoogleMap
            zoom={10}
            center={center}
            mapContainerStyle={containerStyle}
        >
            <Marker position={center} />
        </GoogleMap>
        </>
    )
}