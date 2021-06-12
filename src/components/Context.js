import React from 'react';

const Context = React.createContext();

export class Provider extends React.Component {
    state = {
        allData: [],
        city: "Vancouver",
        units: "metric",
        key: "db27287803721756d273ad76e35706ea",
        mainUrl: "https://api.openweathermap.org/data/2.5/",
    }
    // fetchData(city){
    //     fetch(`${this.state.mainUrl}weather?q=${this.state.city}&units=metric&appid=${this.state.key}`).then(response =>{
    //         if (response.status !== 200){
    //             console.log(`Houston we have a problem! It's = ${response.status}`)
    //         }
    //         response.json().then(data => {
    //             this.setState({
    //                 allData: data
    //             });
    //         })
    //         .catch((error) => {
    //             console.log(`Houston, we still have a problem! It's = ${error}`)
    //         })
    //     })
    // }


    componentDidMount() {
        // this.fetchData("Vancouver");
        // console.log(this.state.allData)
        fetch(`${this.state.mainUrl}weather?q=${this.state.city}&units=${this.state.units}&appid=${this.state.key}`).then(response =>{
            if (response.status !== 200){
                console.log(`Houston we have a problem! It's = ${response.status}`)
            }
            response.json().then(data => {
                this.setState({
                    allData: data
                });
            })
            .catch((error) => {
                console.log(`Houston, we still have a problem! It's = ${error}`)
            })
        })
    }

    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}



export const Consumer = Context.Consumer;