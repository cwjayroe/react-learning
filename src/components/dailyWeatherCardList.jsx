import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import WeatherCard from 'components/weatherCard';
import queryString from 'query-string';


class DailyWeatherCardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: [],
            dailyWeatherData: [],
            queryDate: null,
            errorOccurred: false
        };
    }

    componentDidMount = async () => {
        try {
            await this.saveRequestValues();
            console.log(this.state.weatherData)
            this.parseWeatherData();


        } catch (error) {
            this.setState({ errorOccurred: true })
        }
    }

    saveRequestValues = async () => {
        const values = queryString.parse(this.props.location.search)
        this.setState({ weatherData: this.props.weatherData.list, queryDate: values.date })
        return
    }

    parseWeatherData = () => {
        let dailyWeatherData = [];


        for (const [key, value] of Object.entries(this.state.weatherData)) {
            let trimmedDateTime = value.dt_txt.split(' ')[0]

            if (trimmedDateTime == this.state.queryDate) {
                dailyWeatherData.push(value);
            }
        }

        this.setState({ dailyWeatherData })
        return
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.dailyWeatherData.map((weatherItem, i) =>
                        <Col key={i}>
                            <WeatherCard
                                low={weatherItem.main.temp_min}
                                high={weatherItem.main.temp_max}
                                weather={weatherItem.weather[0].main}
                                day={weatherItem.dt_txt}
                                onClick={this.handleCardClick}
                            />
                        </Col>
                    )}
                </Row>
            </Container>
        )
    }
}

export default DailyWeatherCardList