import { createContext, useContext, useState, useEffect } from "react"
import React from 'react'
import axios from "axios";
let CityContext = createContext();
let CitiesContext = createContext();
let ForecastContext = createContext();

let sehirlist=["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kırıkkale", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Şanlıurfa", "Siirt", "Sinop", "Sivas", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"];

export let CityProvider =({children})=>{
    let [city, setCity] = useState("Adana");
    let [weather, setWeather]= useState();
    let [forecastweather, setWeatherforecast]= useState();
    let getWeatherData= async (city)=>{ 
      try{
        let key = process.env.REACT_APP_WEATHER_DATA;
        let forecastdata =await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&lang=tr`);
        let data =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=tr`);
        setWeatherforecast(forecastdata)
        setWeather(data);
      }
      catch{
        console.log("veri gelmedi");
      }        
    }
    useEffect(()=>{
      getWeatherData(city);
    }, [city]);

    let values = { city, setCity, weather, forecastweather};
    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}
export let useCity =()=> useContext(CityContext);

export let CitiesProvider =({children})=>{
    let [cities, setCities] = useState(sehirlist);
    let values = {cities};
    return <CitiesContext.Provider value={values}>{children}</CitiesContext.Provider>
}
export let useCities =()=> useContext(CitiesContext);
