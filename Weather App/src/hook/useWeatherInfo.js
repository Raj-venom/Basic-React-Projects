import { useEffect, useState } from 'react';
import axios from 'axios'
import conf from "../conf/conf"

function useWeatherInfo(city) {
    const [data, setData] = useState(null)
    useEffect(() => {
        const WAPI = `https://api.openweathermap.org/data/2.5/weather?q=`;
        ; (
            async () => {
                try {
                    const res = await axios.get(`${WAPI}${city}&appid=${conf.apiKey}&units=metric`);

                    setData(res.data)

                } catch (error) {
                    console.log(error.message);
                }
            }
        )()

    }, [city])

    return data

}

export default useWeatherInfo