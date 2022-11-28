import React from 'react';
import { useDate } from '../contexts/dateContext';
import { useCity } from "../contexts/stateContext";
import Switch from './switch';

function Header() {
let yenitarih = useDate();
let yenisehir = useCity();
let weather =yenisehir.weather;
let forecastweather = yenisehir.forecastweather;
if (!weather && !forecastweather) {
  return <p className="yukleniyor">Yükleniyor.</p>
}
else{
  return (
    <div className={`header`}>
      <div className='headerana'>
        <div className='headerlogo'>DAILY WEATHER</div>
        <div className='headerbuton'><Switch></Switch></div>
      </div>
    <div className='tarih'><marquee direction="left">{`iyi günler bugün ${yenitarih.Date[2]} ${yenitarih.Date[4]} ${yenitarih.Date[3]}, ${weather.data.name} semalarında hava ${weather.data.weather.map(data=>data.description)}`}</marquee></div>
  </div>
  )
}
}
export default Header;
