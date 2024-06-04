
import { Card } from "./components"

import './App.css'
import { background } from "./assets/img"


function App() {


  return (
    <>
      <div 
      style={{background : `url(${background.clear})`}}
      className="flex justify-center items-center h-screen w-full ">

        <Card />
      </div>
    </>
  )
}

export default App
