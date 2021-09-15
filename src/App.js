import React, { useState, useEffect, useRef } from 'react';
import InputLocation from './components/InputLocation';
import AppHeader from './components/AppHeader';
import CurrentWeather from './components/CurrentWeather';
import HourlyChart from './components/HourlyChart';
import DailyWeather from './components/DailyWeather';
import { getLocation } from './utilities/getLocation';
import { getWeather } from './utilities/getWeatherInfo';
import { getCoords } from './utilities/getCoords';
import './App.scss';

function App() {

  const inputRef = useRef(null);

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading, setLoading] = useState(true)

  

  useEffect(() => {
    const success = (pos) => {
      var crd = pos.coords;
    
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      fetchWeatherData(crd);
    }
    
    const error = (err) => {
      console.log('Location services turned off');
      const londonPos = {
        latitude: '51.509865',
        longitude: '-0.118092',
      } 
      fetchWeatherData(londonPos);
    }

    navigator.geolocation.getCurrentPosition(success, error);
    
  }, []); 

  const fetchWeatherData = (position) => {
    getLocation(position)
    .then(townName => {
      setCity(townName);
    })
    console.log("Getting weather");
    getWeather(position)
    .then(weather => {
      setWeather(weather)
      setLoading(false);
    })
  }

  const changeLocation = (e) => {
    if(e.key === 'Enter') {
      setLoading(true);
      var input = inputRef.current.value;
      getCoords(input)
        .then(newPos => {
          var tempPos = {};
          tempPos.latitude = newPos.lat;
          tempPos.longitude = newPos.lng;
          fetchWeatherData(tempPos);
          console.log("Changing location");
        })
    }
  }


  return (
    <div>
      <header>
        <InputLocation 
        ref={inputRef}
        onKeyPress={(e) => changeLocation(e)}/>
      </header>
      <div className="app">
        {(isLoading) ? (
          <div className="loader"></div>
        ) : (
          <div>
            <div className="weather">
              <div className="weather__current">
                <AppHeader 
                  data={weather}
                  city={city}
                />
                <CurrentWeather 
                  data={weather}
                />
              </div>
              <div className="weather__future">
                <p>Temperature</p>
                <HourlyChart 
                  data={weather}
                />
                <DailyWeather
                  dailyData={weather.daily}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

