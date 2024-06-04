import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weatherData: null
}

const weatherSlice = createSlice({

    name: "weather",
    initialState,

    reducers: {
        addWeatherData: (state, action) => {
            state.weatherData = action.payload.weatherData
        }
    }
})


export const { addWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;