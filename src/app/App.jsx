import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Highlights from '../components/Highlights'
import Today from '../components/Today'
import Week from '../components/Week'
import Menu from '../components/Menu'

export default function App() {

  const [data, setData] = useState(null)
  const [location, setLocation] = useState("Cancun")
  const [showMenu, setShowMenu] = useState(false)
  const urls = {
    "Cancun": 'https://api.open-meteo.com/v1/forecast?latitude=21.17&longitude=-86.85&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto&start_date=2023-02-11&end_date=2023-02-16',
    "MexicoCity": "https://api.open-meteo.com/v1/forecast?latitude=19.43&longitude=-99.13&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto&start_date=2023-02-11&end_date=2023-02-16"
  }

  const connect = async () => {
    let data = await axios.get(urls[location])
    return data
  }

  useEffect(() => {
    if (!data) {
      connect()
        .then(res => {
          setData(res.data)
        })
    }

    if (data) {
      connect()
        .then(res => {
          setData(res.data)
        })
    }
  }, [location])

  return (
    <div>
      {
        (showMenu) ?
        <Menu location={setLocation} show={setShowMenu} />
        :
          <div className='app-container'>
            <Today show={ setShowMenu } location={ location } data={ (data) ? data.current_weather : null } />
            <div>
              <Week daily={ (data) ? data.daily : null }/>
              <Highlights windspeed={ (data) ? data.current_weather.windspeed : null } winddirection={ (data) ? data.current_weather.winddirection : null } />
            </div>
          </div>
      }
    </div>
  )
}
