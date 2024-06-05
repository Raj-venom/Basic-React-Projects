import { Card } from "./components"
import './App.css'
import { background } from "./assets/img"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"


function App() {
  const data = useSelector((state) => state.weather.weatherData)


  if (data) {
    const condition = data.weather[0].main

    return (
      <div
        style={{
          background: `url(${background[condition]}`,
          transition: 'background-image 0.2s ease-in-out',
          backgroundSize: 'cover',

        }}

        className=" bg-cov flex justify-center items-center h-screen w-full ">

        <Card />
      </div>
    )
  }


  if (!data) {
    return (
      <>
        <div
      
          className=" flex justify-center items-center h-screen w-full " >

          <Card />
        </div >
      </>
    )
  }
}

export default App
