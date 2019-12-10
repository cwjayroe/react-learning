import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const styles = {
    card: {
        width: "10rem",
        border: "1px solid #dddddd"
    },
    cardHeader: {
        textAlign: "center",
        fontSize: "13px",
        fontColor: "#bbbbbb"
    },
    h4Style: {
        textAlign: "left"
    },
    h5Style: {
        textAlign: "left"
    },
    h6Style: {
        textAlign: "left"
    }
}

class WeatherCard extends React.Component {
    render() {
        return (
            <div style={styles.card}>
                <div>
                    <div style={styles.cardHeader}>{ this.props.day }</div>
                    <h5 style={styles.h5Style}>{ this.props.weather }</h5>

                    <Row>
                        <Col style={styles.h6Style}>{ this.props.high }</Col>
                        <Col style={styles.h6Style}>{ this.props.low }</Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default WeatherCard