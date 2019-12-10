import React from 'react';
import WeatherCard from './card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class CardList extends React.Component {
    render() {
        return (
            <Row>
                {this.props.weatherList.map((weatherItem, i) =>
                    <Col key={i}>
                        <WeatherCard low={weatherItem.low} high={weatherItem.high} weather={weatherItem.weather} day={weatherItem.day} />
                    </Col>
                )}
            </Row>
        )
    }
}

export default CardList