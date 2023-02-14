import React, { useEffect, useState } from 'react'
import Clear from "../assets/Clear.png"
import Hail from "../assets/Hail.png"
import HeavyCloud from "../assets/HeavyCloud.png"
import HeavyRain from "../assets/HeavyRain.png"
import LigthCloud from "../assets/LightCloud.png"
import LightRain from "../assets/LightRain.png"
import Shower from "../assets/Shower.png"
import Sleet from "../assets/Sleet.png"
import Snow from "../assets/Snow.png"
import Thunderstorm from "../assets/Thunderstorm.png"

export default function Today(props) {

  const [day, setDay] = useState({})
  const [weather, setWeather] = useState({})

  const getWeather = (code) => {
    let weatherName, imgUrl; 

    switch(code) {
      case 0:
        weatherName = "Clear"
        imgUrl = Clear
        break;

      case 1:
      case 2:
        weatherName = "Light cloud"
        imgUrl = Hail
        break;

      case 3:
        weatherName = "Heavy cloud"
        imgUrl = HeavyCloud
        break;

      case 66:
      case 67:
      case 77:
        weatherName = "Hail"
        imgUrl = HeavyRain
        break;

      case 65:
        weatherName = "Heavy rain"
        imgUrl = LightCloud
        break;

      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
      case 61:
      case 63:
      case 80:
        weatherName = "Light rain"
        imgUrl = LightRain
        break;

      case 80:
      case 81:
      case 82:
        weatherName = "Shower"
        imgUrl = Shower
        break;

      case 66:
      case 67:
        weatherName = "Sleet"
        imgUrl = Sleet
        break;

      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        weatherName = "Snow"
        imgUrl = Snow
        break;

      case 95:
      case 96:
      case 99:
        weatherName = "Thunderstorm"
        imgUrl = Thunderstorm
        break;
    }

    setWeather({
      weatherName: weatherName,
      imgUrl: imgUrl
    })
  }

  const getDate = (date) => {
    let month = date.substring(date.indexOf("-") + 1, date.lastIndexOf("-"))
    let day = date.substring(date.lastIndexOf("-") + 1, date.lastIndexOf("-") + 3)
    let dayOfWeek = new Date().getDay()
    
    switch(dayOfWeek) {
      case 0:
        dayOfWeek = "Sun"
        break;

      case 1:
        dayOfWeek = "Mon"
        break;

      case 2:
        dayOfWeek = "Tue"
        break;

      case 3:
        dayOfWeek = "Wed"
        break;

      case 4:
        dayOfWeek = "Thu"
        break;
      
      case 5:
        dayOfWeek = "Fri"
        break;

      case 6:
        dayOfWeek = "Sat"
        break;
    }

    switch(month) {
      case "01":
        month = "Jan"
        break;

      case "02":
        month = "Feb"
        break;

      case "03":
        month = "Mar"
        break;
  
      case "04":
        month = "Apr"
        break;

      case "05":
        month = "May"
        break;
  
      case "06":
        month = "Jun"
        break;

      case "07":
        month = "Jul"
        break;
  
      case "08":
        month = "Aug"
        break;
  
      case "09":
        month = "Sep"
        break;
    
      case "10":
        month = "Oct"
        break;
  
      case "11":
        month = "Nov"
        break;
    
      case "12":
        month = "Dec"
        break;
    }

    setDay({
      dayOfWeek: dayOfWeek,
      day: day,
      month: month,
    })
  }

  useEffect(() => {
    if (props.data) {
      getDate(props.data.time)
      getWeather(props.data.weathercode)
    }
  }, [props])

  return (
    <section className='today-container text-white p-4 d-flex flex-column'>
      <div className='d-flex justify-content-between align-items-center mb-5'>
        <button className='btn btn-secondary' onClick={() => props.show(true) }>Search for places</button>
        <div></div>
      </div>
      <div className='d-flex justify-content-center'>
        <img src={ weather.imgUrl } alt='weather' />
      </div>
      <div className='align-self-center'>
        <span className='today-container-temperature-number'>{ (props.data) ? props.data.temperature.toFixed(0) : '' }</span>
        <span className='today-container-temperature-centigrades'>ºC</span>
      </div>
      <div className='today-container-weather-name text-secondary text-center mb-5'>{ weather.weatherName }</div>
      <div className='today-container-date text-secondary text-center mb-4'>Today · { day.dayOfWeek }, { day.day } { day.month }</div>
      <div className='today-container-location text-secondary text-center'>
        <i className="bi bi-geo-alt-fill"></i>
        <span> { props.location }</span>
      </div>
    </section>
  )
}
