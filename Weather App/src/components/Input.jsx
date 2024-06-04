import React, {forwardRef} from 'react'

function input({ type = "text", ...props }, ref) {


  return (
    <input
      type={type}
      ref={ref}
      className=' text:[#555] outline-none px-5 m-5 h-14 w-[300px] rounded-full '
      placeholder='Enter city name'

      {...props}
    >

    </input>
  )
}

export default forwardRef(input)