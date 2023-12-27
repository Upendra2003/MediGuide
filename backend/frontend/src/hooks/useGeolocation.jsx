import React, { useEffect, useState } from 'react'

const useGeolocation = () => {

    const [location,setLocation] = useState({
        loaded:false,
        cooordinates:{lat:0.00,lng:0.00}
    });

    const onSuccess = location =>{
        setLocation({
            loaded:true,
            cooordinates:{
                lat:location.coords.latitude,
                lng:location.coords.longitude,
            }
        })
    }

    const onError = error => {
        setLocation({
            loaded:true,
            error,
        })
    }

    useEffect(()=>{
        if(!("geolocation" in navigator)){
            onError({
                code:0,
                message:"Geolocation not supported",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess,onError);
    },[])

    return location;
}

export default useGeolocation;