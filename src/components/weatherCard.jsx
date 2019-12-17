import React from 'react';
import cloudyImg from 'img/cloud.png'
import dropsImg from 'img/drops.png'
import sunImg from 'img/sun.png'
import { Link } from "react-router-dom";


const styles = {
    card: {
        maxWidth: "5rem",
        border: "1px solid #dddddd",
        textAlign: 'center'
    },
    cardHeader: {
        textAlign: "center",
        fontSize: "13px",
        color: "#6e6e6e"
    },
    h4Style: {
        textAlign: "left"
    },
    h5Style: {
        textAlign: "left"
    },
    h6Style: {
        textAlign: "left",
        fontSize: "13px"
    },
    tempRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
}


class WeatherCard extends React.Component {
    render() {
        let imgMap = {
            'clouds': cloudyImg,
            'sunny': sunImg,
            'clear': sunImg
        }

        let imgIcon = imgMap[this.props.weather.toLowerCase()];

        return (
            <Link to={`/day?date=${this.props.day}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div style={styles.card}>
                    <div onClick={this.hello}>
                        <div style={styles.cardHeader}>{this.props.day}</div>
                        <img style={styles.image} src={imgIcon != null ? imgIcon : sunImg}></img>

                        <div style={styles.tempRow}>
                            <div style={styles.h6Style}>{Math.round(this.props.high) + String.fromCharCode(176)}</div>
                            <div style={styles.h6Style}>{Math.round(this.props.low) + String.fromCharCode(176)}</div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default WeatherCard