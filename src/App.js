import React from 'react';
import WeeklyWeatherList from 'components/weeklyWeatherList'
import DailyWeatherCard from 'components/dailyWeatherCardList'
import axios from 'axios';
import { Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allWeatherData: [],
            dailyWeatherData: [],
            errorOccurred: false
        };
    }

    componentDidMount = async () => {
        try {
            let allWeatherData = await this.getWeatherData();
            let dailyWeatherData = await this.parseWeatherData(allWeatherData);

            this.setState({ allWeatherData, dailyWeatherData })
        } catch (error) {
            this.setState({ errorOccurred: true })
            console.log(error)
        }
    }

    getWeatherData = async () => {
        let weatherapiResponse = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Houston&units=Imperial&appid=${process.env.REACT_APP_API_KEY}`);
        let weatherItems = weatherapiResponse.data;
        return weatherItems;
    }

    parseWeatherData = async (weatherData) => {
        let dailyWeatherData = [];
        let lastAdded;

        for (const [key, value] of Object.entries(weatherData.list)) {
            let dictCopy = {};

            Object.assign(dictCopy, value);

            let trimmedDateTime = dictCopy.dt_txt.split(' ')[0]

            if (trimmedDateTime == lastAdded) {
                continue
            }

            dictCopy.dt_txt = trimmedDateTime;
            dailyWeatherData.push(dictCopy);
            lastAdded = trimmedDateTime;
        }

        return dailyWeatherData
    }
    render() {
        let rowData;

        if (this.state.errorOccurred) {
            rowData = <div>An error occurred fetching weather data</div>
        }
        else if (this.state.dailyWeatherData.length == 0) {
            rowData = <div>Loading...</div>
        } else {

            rowData = <WeeklyWeatherList data={this.state.dailyWeatherData} />
        }

        return (
            <div className="App">
                <Switch>
                    <Route path='/day' render={(props) => <DailyWeatherCard {...props} weatherData={this.state.allWeatherData} />}>
                    </Route>
                    <Route exact path='/'>
                        { rowData }
                    </Route>
                </Switch>
            </div>
        );
    }

}

export default App;
