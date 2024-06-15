import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' min-h-screen flex  content-between bg-zinc-500 '>

        {/* <Home /> */}
        <Outlet/>
        {/* <Edit/> */}
      </div>
    </>
  )
}

export default App
