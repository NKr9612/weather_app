import React from 'react';


const Results = props =>{

    const {temp,tempOdczuw,tempMin,tempMax,pressure,humidity,windSpeed,country,sunrise ,sunset, city,date } = props.state;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    return (
        <ul>
         <li>Miasto, które wyszukałeś to: <strong>{city}</strong></li>
         <li>Dnia <strong>{date}</strong></li>
         <li>Kraj: <strong>{country}</strong></li>
         <li>Temperatura wynosi: <strong>{temp}</strong></li>
         <li>Temperatura odczuwalna: <strong>{tempOdczuw}</strong></li>
         <li>Temperatura minimalna: <strong>{tempMin}</strong></li>
         <li>Temperatura maksymalna: <strong>{tempMax}</strong></li>
         <li>Ciśnienie: <strong>{pressure}hPa</strong></li>
         <li>Wilgotność powietrza: <strong>{humidity}%</strong></li>
         <li>Prędkość wiatru: <strong>{windSpeed} m/s</strong></li>
         <li>Wschód: <strong>{sunriseTime}</strong></li>
         <li>Zachód: <strong>{sunsetTime}</strong></li>
        </ul>
    )
}

export default Results;