import { useState } from 'react';
import { Consumer } from "./Context";

const DailyWeather = () => {
    return(
        <Consumer>
        {(value) => (
            console.log(value.allData)
        )}
        </Consumer>
    )
}

export default DailyWeather;