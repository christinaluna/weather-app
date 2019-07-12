import React from 'react';
import './Weather.css';

const Weather = props => (
    <div className="weather-content">
        { props.city && props.country && <p>Location: { props.city }, { props.country }</p> }
        { props.temperature && <p>Temperature: { props.temperature }</p> }
        { props.humidity && <p>Humidity: { props.humidity }%</p> } 
        { props.description && <p>Conditions: { props.description }</p> }
        { props.error && <p className="error">{ props.error }</p> }
    </div>
);
   
export default Weather;