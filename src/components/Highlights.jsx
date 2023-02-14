import React from 'react'

export default function Highlights(props) {

  const windDirection = (windy) => {
    let winddirection;

    if (windy > 350 && windy < 10) {
      winddirection = "N"
    } else if (windy >= 10 && windy < 30) {
      winddirection = "NNE"
    } else if (windy >= 30 && windy < 50) {
      winddirection = "NE"
    } else if (windy >= 50 && windy < 80) {
      winddirection = "ENE"
    } else if (windy >= 80 && windy < 100) {
      winddirection = "E"
    } else if (windy >= 100 && windy < 120) {
      winddirection = "ESE"
    } else if (windy >= 120 && windy < 140) {
      winddirection = "SE"
    } else if (windy >= 140 && windy < 170) {
      winddirection = "SSE"
    } else if (windy >= 170 && windy < 190) {
      winddirection = "S"
    } else if (windy >= 190 && windy < 210) {
      winddirection = "SSW"
    } else if (windy >= 210 && windy < 230) {
      winddirection = "SW"
    } else if (windy >= 230 && windy < 260) {
      winddirection = "WSW"
    } else if (windy >= 260 && windy < 280) {
      winddirection = "W"
    } else if (windy >= 280 && windy < 300) {
      winddirection = "WNW"
    } else if (windy >= 300 && windy < 320) {
      winddirection = "NW"
    } else if (windy >= 320 && windy < 350) {
      winddirection = "NNW"
    } 

    return winddirection
  }

  return (
    <div className="highlights-container d-flex flex-wrap">
      <div className='highlights-container-card-container p-3 text-white d-flex flex-column align-items-center'>
        <div>Wind status</div>
        <div className='d-flex align-items-center'>
          <span className='text-1'>{ (props.windspeed) ? props.windspeed.toFixed(0) : "" }</span>
          <span className='text-2'>mph</span>
        </div>
        <div>{ (props.winddirection) ? windDirection(props.winddirection) : "" }</div>
      </div>

      <div className='highlights-container-card-container p-3 text-white d-flex flex-column align-items-center'>
        <div>Humidity</div>
        <div className='d-flex align-items-center'>
          <span className='text-1'>84</span>
          <span className='text-2'>%</span>
        </div>
        <div className='text-white d-flex w-100'>
          <div className="col">0</div>
          <div className="col text-center">50</div>
          <div className="col text-end">100</div>
        </div>
        <div  className='highlights-container-card-container-percentage-bar-container bg-white'>
          <div className="highlights-container-card-container-percentage-bar-content bg-warning"></div>
        </div>
        <div className='text-secondary text-end w-100'>%</div>
      </div>

      <div className='highlights-container-card-container p-3 text-white d-flex flex-column align-items-center'>
        <div>Visibility</div>
        <div className='d-flex align-items-center gap-2'>
          <span className='text-1'>6,4</span>
          <span className='text-2'>miles</span>
        </div>
      </div>

      <div className='highlights-container-card-container p-3 text-white d-flex flex-column align-items-center'>
        <div>Air Pressure</div>
        <div className='d-flex align-items-center gap-2'>
          <span className='text-1'>998</span>
          <span className='text-2'>mb</span>
        </div>
      </div>
    </div>
  )
}
