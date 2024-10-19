import React, {useState} from "react";

type propsType = {
    temp: number
    description: string
}

export const WeatherShowing = ({temp, description}: propsType) => {
    return <>
        <div className="weather">
            <p>Temperature: {temp} °C</p>
            <p>Weather: {description}</p>
        </div>
    </>
}