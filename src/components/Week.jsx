import React, { useEffect, useState } from 'react'
import Clear from "../assets/Clear.png"
import Hail from "../assets/Hail.png"
import HeavyCloud from "../assets/HeavyCloud.png"
import HeavyRain from "../assets/HeavyRain.png"
import LightCloud from "../assets/LightCloud.png"
import LightRain from "../assets/LightRain.png"
import Shower from "../assets/Shower.png"
import Sleet from "../assets/Sleet.png"
import Snow from "../assets/Snow.png"
import Thunderstorm from "../assets/Thunderstorm.png"

export default function Week(props) {

  const today = new Date().getDay()
  const days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]

  const getWeather = (code) => {
    let imgUrl;

    switch(code) {
      case 0:
        imgUrl = Clear
        break;

      case 1:
      case 2:
        imgUrl = Hail
        break;

      case 3:
        imgUrl = HeavyCloud
        break;

      case 66:
      case 67:
      case 77:
        imgUrl = HeavyRain
        break;

      case 65:
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
        imgUrl = LightRain
        break;

      case 81:
      case 82:
        imgUrl = Shower
        break;

      case 66:
      case 67:
        imgUrl = Sleet
        break;

      case 71:
      case 73: 
      case 75:
      case 77:
      case 85:
      case 86:
        imgUrl = Snow
        break;

      case 95:
      case 96:
      case 99:
        imgUrl = Thunderstorm
        break;
      }
      return imgUrl
  }

  const getMonth = (time) => {
    let month = time.substring(time.indexOf("-") + 1, time.lastIndexOf("-"));

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

    return month
  } 

  return (
    <div className='week-container'>
      {
        (props.daily) ?
        props.daily.time.map((item, index) => {
          if (index > 0) {
            return (
              <div key={index} className='week-container-card-container d-flex flex-column justify-content-between align-items-center p-4 text-white'>
                {
                  ( index === 1) ?
                    <div className='text-center'>Tomorrow</div>
                    :
                    <div className='text-center'>{ days[today + (index)] }, { item.substring(item.lastIndexOf("-") + 1) } { getMonth(item) }</div>
                }
                <img src={ getWeather(props.daily.weathercode[index]) } alt='img'></img>
                <div className='d-flex flex-wrap gap-1 justify-content-center'> 
                  <span>{ props.daily.temperature_2m_max[index].toFixed(0) }ºC</span>
                  <span className='text-secondary'>{ props.daily.temperature_2m_min[index].toFixed(0) }ºC</span>
                </div>
              </div>
            )
          }
        })
        :
        <div></div>
      }
    </div>
  )
}
