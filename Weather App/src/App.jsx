import { Card } from "./components"
import './App.css'
import { background } from "./assets/img"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"


function App() {
  const data = useSelector((state) => state.weather.weatherData)


  if (data) {
    const condition = data.weather[0].main

    console.log(`value: ${background[condition]}`);
    return (
      <div
        style={{
           background: `url(${background[condition]}`,
           backgroundSize: 'cover',
           transition: 'background-image 0.3s ease-in-out'
          
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
          // style={{ background: `url(${background.clear})` }}
          className="flex justify-center items-center h-screen w-full ">

          <Card />
        </div>
      </>
    )
  }
}

export default App
