import React from 'react'

export default function Menu(props) {

  const handleLocation = (city) => {
    props.location(city)
    props.show(false)
  }

  return (
    <div className='menu-container vw-100 vh-100 text-white p-3'>
      <div className='text-end mb-4'>
        <i className="bi bi-x-lg" onClick={() => props.show(false)} ></i>
      </div>
      <div className='d-flex w-100 gap-3 mb-5'>
        <input className='w-75' type="text" placeholder='Search Location'></input>
        <button className='w-25 btn btn-primary'>Search</button>
      </div>
      <div className="d-flex flex-column gap-5">
        <div onClick={ () => handleLocation("Cancun") }>Cancun</div>
        <div onClick={ () => handleLocation("MexicoCity")}>Mexico City</div>
      </div>
    </div>
  )
}
