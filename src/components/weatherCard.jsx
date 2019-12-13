import React from 'react';
import cloudyImg from 'img/cloud.png'
import dropsImg from 'img/drops.png'
import sunImg from 'img/sun.png'


const styles = {
    card: {
        maxWidth: "5rem",
        border: "1px solid #dddddd"
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
            <div onClick={this.props.onClick} style={styles.card}>
                <div>
                    <div style={styles.cardHeader}>{this.props.day}</div>
                    <img src={imgIcon != null ? imgIcon : sunImg}></img>

                    <div style={styles.tempRow}>
                        <div style={styles.h6Style}>{Math.round(this.props.high) + String.fromCharCode(176)}</div>
                        <div style={styles.h6Style}>{Math.round(this.props.low) + String.fromCharCode(176)}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherCard