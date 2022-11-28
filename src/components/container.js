import React from 'react';
import Header from './header';
import { DateProvider } from '../contexts/dateContext';
import { CityProvider, CitiesProvider } from '../contexts/stateContext';
import { useTheme } from '../contexts/ThemeContext';
import { useCity } from "../contexts/stateContext";
import CitiesArea from './CitiesArea';
import WeatherArea from './WeatherArea';

function Container() {
  let yenisehir = useCity();
  let weather =yenisehir.weather;
  let forecastweather = yenisehir.forecastweather;
  let theme = useTheme();  
  if (!weather && !forecastweather) {
    return <p className="yukleniyor">Yükleniyor.</p>
  }
  else{
    return (
    <div className={`App ${theme.theme}`}>
      <DateProvider>
        <CityProvider>
          <CitiesProvider>
            <Header></Header>
            <div className={`mainWeatherArea`}>
              <CitiesArea></CitiesArea>
              <WeatherArea></WeatherArea>
            </div>
          </CitiesProvider>
        </CityProvider>
      </DateProvider>
    </div>
  )
}
}
export default Container;
