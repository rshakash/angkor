import { useState } from 'react'
import axios from "axios"
import WeatherData from '../Components/WeatherData'

const Weather = () => {

  const apiKey = 'e20a6d627e398e3e683d153457069d1e'
  const [weather, setWeather] = useState(null)
  const [city, setCity] =  useState('')
  
  const handleClick = (e) => {
    e.preventDefault()
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      if (city) {
        axios.get(url)
        .then(res => res.data)
        .then(data => {
          setWeather(data)
          console.log(data)
        })
      }
  }

  return (
    <div>
      <header>
		<h1>Weather Search</h1>
	</header>
	<main>
		<section id="weather-search">
			<h2>Search for Weather</h2>
			<form id="weather-form" onSubmit={handleClick}>
				<input type="text" id="city-input" placeholder="Enter city name" value={city} onChange={(e) => setCity(e.target.value)}/>
				<button type="submit">Search</button>
			</form>
		</section>
    <WeatherData weather={weather} />
	</main>
    </div>
  )
}

export default Weather