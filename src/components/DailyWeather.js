import { useState } from 'react';
import { Consumer } from "./Context";
import feelsLike from '../icon/temperature.svg';
import windSock from '../icon/windsock.svg';
import humidity from '../icon/humidity.svg';
import sunRise from '../icon/sunrise.svg';
import sunSet from '../icon/sunset.svg';

const DailyWeather = () => {

    //Time convert
    // const sunRiseHour = new Date(sunrise * 1000).getHours();
    // const sunRiseMinute = new Date(sunrise * 1000).getMinutes();
    // const riseTime = ((sunRiseHour)+":"+(sunRiseMinute));
    

    // const sunSetHour = new Date(sunset * 1000).getHours();
    // const sunSetMinute = new Date(sunset * 1000).getMinutes();
    // const setTime = ((sunSetHour)+":"+(sunSetMinute));
    

    return (
        <Consumer>
            {(value) => (
                <div>
                    <div>
                        <h1>{value.allData.name}</h1>
                        <h2>{value.allData.weather[0].main}</h2>
                        <h3>{Math.round(value.allData.main.temp)}°</h3>
                    </div>
                    <div>
                        <div className="feelsLike">
                            <span>
                                <img src={feelsLike}></img>
                                {Math.round(value.allData.main.feels_like)}°
                            </span>
                        </div>
                        <div className="wind">
                            <span>
                                <img src={windSock}></img>
                                {Math.round(value.allData.wind.speed)}km/h
                            </span>
                        </div>
                        <div className="humidity">
                            <span>
                            <img src={humidity}></img>
                            {Math.round(value.allData.main.humidity)}%
                            </span>
                        </div>
                        <div className="sunrise">
                            <span>

                            </span>
                        </div>
                        <div className="sunset">
                            <span>

                            </span>
                        </div>
                    </div>
                </div>
            )}
        </Consumer>
    )
}

export default DailyWeather;