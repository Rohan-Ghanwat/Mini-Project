import { useState } from 'react';
import SearchBox from './SeaerchBox';
import InfoBox from './infoBox';
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp : 26,
        tempMin : 24,
        tempMax: 29,
        humidity: 47,
        weather: "haze"
    })

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }
    return(
        
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>

        </div>
    )

}