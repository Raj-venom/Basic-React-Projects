import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Container from '../components/container/Container'

function Home() {
    const [meme, setMeme] = useState([])

    useEffect(() => {

        const fetchMeme = async () => {

            const res = await fetch("https://api.imgflip.com/get_memes")
            const meme = await res.json()

            setMeme(meme.data.memes);
        }

        fetchMeme()

    }, [])

    return (

        <Container>
            <div className=' flex  flex-wrap'>
                {meme.map((item) => {
                    return <Card key={item.id} title={item.name} url={item.url}  className=' rounded-lg shadow-md ' />
                })}
                
            </div>


        </Container>
    )
}

export default Home