import React from 'react'
import City from '../City/City'
import Country from '../Country/Country'
import Temprature from '../temperature/Temprature'
import './infos.css'
function Infos({datas}) {
  const city = datas?.name
  const country = datas?.sys?.country
  const temp = datas?.main?.temp 
  return (
    
    <div className='infos'>
    
        <City city={city} />
        <div>-</div>
        <Country country={country}/>
        <div>-</div>
        <Temprature temp={temp}/>
    </div>
  )
}

export default Infos