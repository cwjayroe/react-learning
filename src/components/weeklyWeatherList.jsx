import React from 'react';
import WeatherCard from './weatherCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


export default class WeeklyWeatherList extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    {this.props.data.map((weatherItem, i) =>
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