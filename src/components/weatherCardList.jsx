import React from 'react';
import WeatherCard from './weatherCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

class WeatherCardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherItems: [],
            errorOccurred: false
        };
    }


    componentDidMount = async () => {
        try {
            let weatherData = await this.getWeatherData();
            await this.parseWeatherData(weatherData);
        } catch (error) {
            this.setState({ errorOccurred: true })
        }
    }

    getWeatherData = async () => {
        let weatherapiResponse = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Houston&units=Imperial&appid=${process.env.REACT_APP_API_KEY}` );
        let weatherItems = weatherapiResponse.data;
        return weatherItems;
    }

    parseWeatherData = async (weatherData) => {
        let cleanedWeatherData = [];
        let allWeatherData = weatherData.list
        let lastAdded;

        for (const [key, value] of Object.entries(allWeatherData)) {
            let trimmedDateTime = value.dt_txt.split(' ')[0]

            if (trimmedDateTime == lastAdded) {
                continue
            }

            value.dt_txt = trimmedDateTime;
            cleanedWeatherData.push(value)
            lastAdded = trimmedDateTime;
        }

        this.setState({ weatherItems: cleanedWeatherData })
    }

    handleCardClick = () => {
        console.log('true')
    }

    render() {
        let rowData;

        if (this.state.errorOccurred) {
            rowData = <div>An error occurred fetching weather data</div>
        }
        else if (this.state.weatherItems.length == 0) {
            rowData = <div>Loading...</div>
        } else {
            console.log(this.state.weatherItems)
            rowData =
                this.state.weatherItems.map((weatherItem, i) =>
                    <Col key={i}>
                        <WeatherCard
                            low={weatherItem.main.temp_min}
                            high={weatherItem.main.temp_max}
                            weather={weatherItem.weather[0].main}
                            day={weatherItem.dt_txt}
                            onClick={this.handleCardClick}
                        />
                    </Col>
                )
        }

        return (
            <Container>
                <Row>
                    {rowData}
                </Row>
            </Container>

        )
    }
}

export default WeatherCardList