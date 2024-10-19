import React, {useState} from "react";
import {WeatherShowing} from "./weatherShowing";

type propsType = {}

export const Weather = (props: propsType) => {
    const [city, setCity] = useState<string>('Minsk')
    const [weather, setWeather] = useState<{ temp: number, description: string } | null>(null);
    const [error, setError] = useState<null | string>(null)

    const fetchWeather = () => {
        const apiKey = '51020c5ea576d0d9e2afeb97b32fd7d1'

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        
        //https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(json => {
                if (json.cod === "404") {
                    setError('City  not found'); // Устанавливаем ошибку, если город не найден
                } else {
                    console.log(json);
                    setWeather({temp: json.main.temp, description: json.weather[0].description})
                    console.log(weather);
                    setError(null); // Сбрасываем ошибку, если запрос успешен
                }
            }).catch(error => {
            console.error('Ошибка:', error);
            setError('An error occurred'); // Общая ошибка на случай других проблем
        });
        //.then(json => console.log(json))
        console.log(city)
    }

    return <>
        <input type='text' onChange={(e) => {
            const newCity = e.currentTarget.value;
            setCity(newCity);
            console.log(newCity); // Выводим текущее значение сразу
        }}
               value={city}/>
        <button onClick={fetchWeather}>Get weather</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
        {weather && <WeatherShowing temp={weather.temp} description={weather.description} />}
    </>
}