import React from 'react'
import { useDate } from '../contexts/dateContext';
import { useCity, useCities } from "../contexts/stateContext";

function WeatherArea() {
let yenitarih = useDate();
let yenisehir = useCity();
let weather =yenisehir.weather;
let forecastweather = yenisehir.forecastweather;
let yarin = yenitarih.yarin;
if (!weather && !forecastweather) {
  return <p className="yukleniyor">Yükleniyor.</p>
}
else{
  return (
    <div className='WeatherArea'>
    <div className='today'>
      <ul>
        <li className='sehir'> {weather.data.name}</li>
        <li className='tarihsaat'>{yenitarih.Date[2]} {yenitarih.Date[4]} : {yenitarih.Date[3]}</li>
        <li className='derece'>{Math.ceil(weather.data.main.temp -273.15)}</li>
        <li className='durum'>en düşük: {Math.ceil(weather.data.main.temp_min -273.15)} <br />en yüksek: {Math.ceil(weather.data.main.temp_max -273.15)}</li>
        <li className='durum'>{weather.data.weather.map(data=>data.description)}</li>
      </ul>
    </div>
    <div className='otherDays'>
      <ul>
        <li className='otherDaysli cumartesi'>
          <ul className='otherDaysliul'>
            <li className='othertarihsaat'>{yarin["ikincigun"]}</li>
            <li className='otherderece'>{Math.ceil(forecastweather.data.list[0].main.temp -273.15)}</li>
            <li className='otherdurum'>{forecastweather.data.list[0].weather.map(data=>data.description)}</li>
          </ul>
        </li>
        <li className='otherDaysli pazar'>
            <ul className='otherDaysliul'>
              <li className='othertarihsaat'>{yarin["ucuncugun"]}</li>
              <li className='otherderece'>{Math.ceil(forecastweather.data.list[1].main.temp -273.15)}</li>
              <li className='otherdurum'>{forecastweather.data.list[1].weather.map(data=>data.description)}</li>
            </ul>
        </li>
        <li className='otherDaysli pazartesi'>
          <ul className='otherDaysliul'>
              <li className='othertarihsaat'>{yarin["dorduncugun"]}</li>
              <li className='otherderece'>{Math.ceil(forecastweather.data.list[2].main.temp -273.15)}</li>
              <li className='otherdurum'>{forecastweather.data.list[2].weather.map(data=>data.description)}</li>
          </ul>
        </li>
        <li className='otherDaysli salı'>
          <ul className='otherDaysliul'>
              <li className='othertarihsaat'>{yarin["besincigun"]}</li>
              <li className='otherderece'>{Math.ceil(forecastweather.data.list[3].main.temp -273.15)}</li>
              <li className='otherdurum'>{forecastweather.data.list[3].weather.map(data=>data.description)}</li>
          </ul>
        </li>
        <li className='otherDaysli çarşamba'>
          <ul className='otherDaysliul'>
              <li className='othertarihsaat'>{yarin["altincigun"]}</li>
              <li className='otherderece'>{Math.ceil(forecastweather.data.list[4].main.temp -273.15)}</li>
              <li className='otherdurum'>{forecastweather.data.list[4].weather.map(data=>data.description)}</li>
          </ul>
        </li>
        <li className='otherDaysli perşembe'>
          <ul className='otherDaysliul'>
              <li className='othertarihsaat'>{yarin["yedincigun"]}</li>
              <li className='otherderece'>{Math.ceil(forecastweather.data.list[5].main.temp -273.15)}</li>
              <li className='otherdurum'>{forecastweather.data.list[5].weather.map(data=>data.description)}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  )
}
}
export default WeatherArea;
