import React from 'react'

function Square({ value, handleClick }) {

    return (
        <div onClick={handleClick}
            className=' bg-green-400 border cursor-pointer border-gray-600 h-28 w-28 flex justify-center items-center'
        >
            <h5 className={`font-semibold text-4xl ${value === "X" ? "text-white": " text-slate-500 "}  `}>{value}</h5>
        </div>

    )
}

export default Square