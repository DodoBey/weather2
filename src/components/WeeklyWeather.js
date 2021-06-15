import CloudyImg from '../icon/cloudy.svg';
import RainyImg from '../icon/rainy.svg';
import SnowyImg from '../icon/snow.svg';
import ClearImg from '../icon/clear.svg';
import '../css/weekly.css'
import { Consumer } from "./Context";
import { useEffect, useState } from 'react';

const WeeklyWeather = () => {
    const [currentDay, setCurrentDay] = useState("");

    // const CreateWeeklyDay = () => {
    //     var day = new Date();
    //     const arrDays = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //     for( let i = 0; i < 7; i++){
    //      setCurrentDay(arrDays[(day.getDay() + 1 + i) % 7])
    //  }
    // }

    // useEffect(() => {
    //     CreateWeeklyDay();
    // })

    console.log(currentDay)

    {/* {value.weekly.splice(1).map((weekly) => {
                    let icon = "";
                    switch (weekly.weather[0].main) {
                        case "Clouds": {
                            icon = <img src={CloudyImg}></img>
                            break;
                        }
                        case "Rain": {
                            icon = <img src={RainyImg}></img>
                            break;
                        }
                        case "Clear": {
                            icon = <img src={ClearImg}></img>
                            break;
                        }
                        case "Snow": {
                            icon = <img src={SnowyImg}></img>
                            break;
                        }
                    }
                    <div className="weeklyForecast">
                        <div>{icon}</div>
                        <div>{Math.round(weekly.temp.day)}</div>
                        <div>This Is Test</div>
                    </div>
                })} */}
    return (
        <Consumer>
            {(value) => (
                // <div className="weeklyBar">
                // {value.weekly.splice(1).map((weekly) => (
                //     <div >
                //         <div><img src={CloudyImg}/></div>
                //         <div>{Math.round(weekly.temp.day)}°</div>
                //         <div></div>
                //     </div>
                // )
                // )}
                // </div>
                <div>
                    {}
                {value.weekly.splice(1).map((weekly) => {
                    console.log(weekly.weather[0].main)
                    let icon = "";
                    switch (weekly.weather[0].main) {
                        case "Clouds": {
                            return icon = <img src={CloudyImg}></img>
                        }
                        case "Rain": {
                            return icon = <img src={RainyImg}></img>
                        }
                        case "Clear": {
                            return icon = <img src={ClearImg}></img>
                        }
                        case "Snow": {
                            return icon = <img src={SnowyImg}></img>
                        }
                    }
                    <div className="weeklyForecast">
                        <div>{icon}</div>
                        <div>{Math.round(weekly.temp.day)}</div>
                        <div>This Is Test</div>
                    </div>
                })}
                </div>
            )}
        </Consumer>
    )
}

export default WeeklyWeather;