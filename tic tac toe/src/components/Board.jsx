import React from 'react'
import Square from './Square'
import { useState } from 'react'

function Board() {
    const [value, setValue] = useState(Array(9).fill(null))

    const [isXturn, setIsXturn] = useState(true)


    const handleClick = (index) => {

        setValue((prev) => {

            // don't let over write move
            if (prev[index] !== null) return prev

            prev[index] = isXturn ? "X" : "O"
            return prev
        })
        setIsXturn((prev) => !prev)

    }

    const declareWinner = () => {


        const winState = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ]

        for (let state of winState) {
            const [a, b, c] = state;
            if (value[a] !== null && value[a] === value[b] && value[a] === value[c]) {
                return value[a]
            }
        }

        // check for draw
        let filledSquare = 0;

        value.map((val) => {
            val !== null ? filledSquare++ : ""
        })

        if (filledSquare === 9) {
            return "Tie"
        }

        return false;
    }

    const winner = declareWinner()

    const handleReset = () => {
        setValue(Array(9).fill(null))
    }

    return (
        <>

            <div className={` text-gray-600  flex justify-center flex-col items-center h-screen ${winner === false ? "" : "pointer-events-none"}  `}>
                <h1 className=' font-bold text-4xl mb-10 '>Tic Tac Toe</h1>

                <div className=' flex '>
                    <Square handleClick={() => handleClick(0)} value={value[0]} />
                    <Square handleClick={() => handleClick(1)} value={value[1]} />
                    <Square handleClick={() => handleClick(2)} value={value[2]} />
                </div>

                <div className=' flex '>
                    <Square handleClick={() => handleClick(3)} value={value[3]} />
                    <Square handleClick={() => handleClick(4)} value={value[4]} />
                    <Square handleClick={() => handleClick(5)} value={value[5]} />
                </div>
                <div className=' flex '>
                    <Square handleClick={() => handleClick(6)} value={value[6]} />
                    <Square handleClick={() => handleClick(7)} value={value[7]} />
                    <Square handleClick={() => handleClick(8)} value={value[8]} />
                </div>
                <h1 className={`font-bold text-4xl mt-7 text-red-500  ${winner === false || winner === "Tie" ? "hidden" : "block"} `}>"{winner}" is winner</h1>
                <h1 className={`font-bold text-4xl mt-7 text-red-500 ${winner === "Tie" ? "block" : "hidden"} `}>"Game Status: {winner}" </h1>



                <button onClick={handleReset} className=' pointer-events-auto  mt-5 bg-red-500 rounded-md w-[150px] h-10  text-white text-[17px] ' >Reset Game</button>
            </div>

        </>
    )
}

export default Board