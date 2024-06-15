import React, { useRef, useState } from 'react'
import Container from '../components/container/Container'
import Card from '../components/Card'
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text'
import { exportComponentAsJPEG } from "react-component-export-image"



function Edit() {
    const [count, setCount] = useState(0)
    const [params] = useSearchParams()
    const url = params.get("url")

    const compoentRef = useRef()

    const handleClick = () => {
        setCount((prev) => prev + 1)
    }

    return (
        <Container>

            <div
                className=' px-5 py-10 bg-white  w-[620px]'
                ref={compoentRef}
            >
                <Card btnClass='hidden' url={url} />

                <div className=' flex flex-col mt-[-80px]'>

                    {Array(count).fill(0).map((_, index) => <Text key={index} />)}

                    <button
                        className={`bg-zinc-500 mt-2 w-[100px] h-9 rounded-lg`}
                        onClick={handleClick}

                    >Add Text</button>
                </div>

            </div>
            <button
                className={`bg-blue-500 m-[250px] text-white mt-2 w-[100px] h-9 rounded-lg`}
                onClick={()=>exportComponentAsJPEG(compoentRef)}

            >Save</button>
        </Container>
    )
}

export default Edit