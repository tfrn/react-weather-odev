import { createContext, useContext, useState, useEffect } from "react"
import React from 'react'
let WeatherApiContext = createContext();
export let WeatherProvider =({children})=>{
    let [Weather, setWeather] = useState("");
    useEffect(()=>{
    }, [Weather])
    let values = { Weather, setWeather};
    
    return <WeatherApiContext.Provider value={values}>{children}</WeatherApiContext.Provider>
}
export let useTheme =()=> useContext(WeatherApiContext);
