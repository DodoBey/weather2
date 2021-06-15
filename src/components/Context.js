import RainyVideo from '../videos/rainy.mp4';
import CloudyVideo from '../videos/cloudy.mp4';
import SnowyVideo from '../videos/snowy.mp4';
import ClearVideo from '../videos/clear.mp4';
import React from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_CITY":
            return {
                city: action.payload,
            };
        default:
            return (
                state
                );
    }
}

export class Provider extends React.Component {
    state = {
        allData: [],
        city: "Mersin",
        dispatch: (action) => {
            this.setState((state) => reducer(state, action))
        },
        status: "",
        mainTemp: "",
        feelsLike: "",
        windSpeed: "",
        humidity: "",
        sunRise: "",
        sunSet: "",
        lat: "",
        lon: "",
        bgVideo: "",
        units: "metric",
        weekly: [],
        key: "db27287803721756d273ad76e35706ea",
        mainUrl: "https://api.openweathermap.org/data/2.5/",
    }

    localTime(time) {
        const localeValue = new Date(time * 1000);
        const localeTime = localeValue.toLocaleTimeString(['en-US'], {timeStyle: 'short'});
        return (
            localeTime
        )
    }
    fetchData() {
        fetch(`${this.state.mainUrl}weather?q=${this.state.city}&units=${this.state.units}&appid=${this.state.key}`).then(response => {
            if (response.status !== 200) {
                console.log(`Houston we have a problem! It's = ${response.status}`)
            }
            response.json().then(data => {
                this.setState({
                    allData: data,
                    status: data.weather[0].main,
                    mainTemp: data.main.temp,
                    feelsLike: data.main.feels_like,
                    windSpeed: data.wind.speed,
                    humidity: data.main.humidity,
                    sunRise: this.localTime(data.sys.sunrise),
                    sunSet: this.localTime(data.sys.sunset),
                    lat: data.coord.lat,
                    lon: data.coord.lon
                });
            })
                .catch((error) => {
                    console.log(`Houston, we still have a problem! It's = ${error}`)
                })
        })
    }

    fetchWeekly() {
        fetch(`${this.state.mainUrl}onecall?lat=${this.state.lat}&lon=${this.state.lon}&exclude=hourly,minutely,alerts&units=${this.state.units}&appid=${this.state.key}`).then(response => {
            if (response.status !== 200) {
                console.log(`error ${response.status}`)
            }
            response.json().then(weeklyData => {
                this.setState({
                    weekly: weeklyData.daily
                })
            }).catch(error => {
                console.log(`error ${error}`)
            })
        })
    }

    bgvideoChanger() {
        let value = this.state.status;
        switch (value) {
            case "Clouds":
                this.setState({
                    bgVideo: <source src={CloudyVideo} type='video/mp4' />
                })
                break;
            case "Rain":
                this.setState({
                    bgVideo: <source src={RainyVideo} type='video/mp4' />
                })
                break;
            case "Snow":
                this.setState({
                    bgVideo: <source src={SnowyVideo} type='video/mp4' />
                })
                break;
            case "Clear":
                this.setState({
                    bgVideo: <source src={ClearVideo} type='video/mp4' />
                })
                break;
            case "":
                this.setState({
                    bgVideo: <source src={ClearVideo} type='video/mp4' />
                })
                break;
        }
    }


    componentDidMount() {
        this.fetchData();
        setTimeout(() => {
            this.fetchWeekly()
            this.bgvideoChanger()
        }, 300);
    };

    componentWillUpdate(prevState) {
        if (this.city !== prevState.city) {
            this.fetchData();
            setTimeout(() => {
                this.fetchWeekly()
            }, 1000);
        }
        console.log("updated")
    }





    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}



export const Consumer = Context.Consumer;