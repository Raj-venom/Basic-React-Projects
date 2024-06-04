import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Input, Button } from './index'

import { icon } from "../assets/images/index"
import useWeatherInfo from '../hook/useWeatherInfo'
import { useDispatch } from 'react-redux';
import { addWeatherData } from '../store/weatherSlice';




function Card() {
  console.log("rerender");
  const [data, setdata] = useState(null)
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState('kathmandu')
  const dispatch = useDispatch()

  const inputRef = useRef(null)

  const weatherInfo = useWeatherInfo(city)

  console.log(weatherInfo);

  useEffect(() => {

    if (weatherInfo) {
      dispatch(addWeatherData({weatherInfo}))
      setdata(weatherInfo)
      setLoading(false)
    }

  }, [weatherInfo])


  const handleSubmit = (e) => {
    e.preventDefault()
    const newCity = inputRef.current.value
    if (newCity && newCity !== city) {
      setCity(newCity)
      setLoading(true)
      setdata(null)
    }
  }


  return (
    <div className='w-[450px] bg-none border-0 bg-white/10 flex flex-col py-7 px-20 items-center rounded-2xl shadow-md  '>

      <form onSubmit={handleSubmit} className=' flex '>

        <Input
          ref={inputRef}

        />
        <Button>{"🔍"}</Button>

      </form>



      {loading && (
        <div className=' flex justify-center h-[400px] flex-col items-center gap-2 ' >
          <h2 className=' text-5xl font-bold' >Loading...</h2>
        </div>
      )}

      {data && (
        <div className=' flex justify-center flex-col items-center gap-2 ' >
          <h2 className=' text-black font-bold text-[2rem]' >{data.name}</h2>
          <h2 className=' text-black font-bold text-[2.5rem]' >{Math.round(data.main.temp)}°C</h2>

          <strong className=' text-[1.4rem]' >Humidity: {data.main.humidity}</strong>
          <strong className=' text-[1.4rem]' >Wind Speed: {data.wind.speed}</strong>

          <strong className=' text-[1.4rem]' >Pressure: {data.main.pressure}</strong>

          <strong className=' text-[1.4rem]' >Date: {new Date(data.dt * 1000).toDateString()}</strong>
          <strong className=' text-[1.4rem]' >Description: {data.weather[0].description}</strong>

          <img className=" w-[100px] " src={icon.clear} alt="image1" />

        </div>
      )}

    </div>
  )
}

export default Card