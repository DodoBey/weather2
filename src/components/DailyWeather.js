import { useState } from 'react';
import { Consumer } from "./Context";
import feelsLike from '../icon/temperature.svg';
import windSock from '../icon/windsock.svg';
import humidity from '../icon/humidity.svg';
import sunRise from '../icon/sunrise.svg';
import sunSet from '../icon/sunset.svg';
import '../css/daily.css'
import '../css/search.css'

const DailyWeather = () => {
    const [city, setCity] = useState("");

    const submitCity = (city, dispatch) => {
        dispatch({ type: "SEARCH_CITY", payload: city})
    }
    return (
        <Consumer>
            {(value) => (
                <div>
                    <div className="searchBar">
                        <div><input type="text" placeholder="City Name" id="cityName" className="search_bar" onChange={e => setCity(e.target.value)}/></div>
                        <div><button className="searchButton" onClick={() => submitCity(city, value.dispatch)}>Search City</button></div>
                    </div>
                    <div className="baseInfo">
                        <h2 className="cityName">{value.city.toUpperCase()}</h2>
                        <h3 className="mainStatus">{value.status.toUpperCase()}</h3>
                        <h1 className="mainTemp">{Math.round(value.mainTemp)}°</h1>
                    </div>
                    <div className="extraInfo">
                        <div className="feelsLike">
                            <img src={feelsLike}></img>
                            <span>
                                {Math.round(value.feelsLike)}°
                            </span>
                        </div>
                        <div className="wind">
                            <img src={windSock}></img>
                            <span>
                                {Math.round(value.windSpeed)}km/h
                            </span>
                        </div>
                        <div className="humidity">
                            <img src={humidity}></img>
                            <span>
                                {Math.round(value.humidity)}%
                            </span>
                        </div>
                        <div className="sunrise">
                            <img src={sunRise}></img>
                            <span>
                            {value.sunRise}
                            </span>
                        </div>
                        <div className="sunset">
                            <img src={sunSet}></img>
                            <span>
                            {value.sunSet}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </Consumer>
    )
}

export default DailyWeather;