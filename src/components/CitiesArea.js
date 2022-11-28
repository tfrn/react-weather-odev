import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useCity, useCities } from "../contexts/stateContext";
import { useTheme } from '../contexts/ThemeContext';
function CitiesArea() {
  let theme = useTheme();  
  let yenisehir = useCity();
  let yenisehirler = useCities();
  let weather =yenisehir.weather;
  let forecastweather = yenisehir.forecastweather;
  if (!weather && !forecastweather) {
    return <p className="yukleniyor">Yükleniyor.</p>
  }
  else{
  return (
      <div className='citiesarea'>
        <div className='drop'>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={theme.theme=== "Dark" ? {backgroundColor:"white", color:"black"} : {backgroundColor:"lightgreen", color:"white"} }>
              şehir seç...
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropMenu'>
            {yenisehirler.cities.map((sehir,i)=>{
                return (
                  <Dropdown.Item key={i} className='dropItem' onClick={() => yenisehir.setCity(sehir)}>{sehir}</Dropdown.Item>         
                )
            })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
  )
}
}
export default CitiesArea;
