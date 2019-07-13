import React from 'react';
import './Weather.css';

const Weather = props => (
    <div>
        { props.city && props.country &&  <h2>{ props.city }, { props.country }</h2> }
        <div className="weather-content">
            { props.temperature && 
                <div className="weather-stat">
                    {/* <i class="thermometer half icon big"></i> */}
                    <p>{ props.temperature }&deg;F</p>
                    <p className="weather-stat-title">Temperature</p>
                </div>
            }
            { props.humidity && 
                <div className="weather-stat">
                    {/* <i class="thermometer half icon big"></i> */}
                    <p>{ props.humidity }%</p>
                    <p className="weather-stat-title">Humidity</p>
                </div>
            } 
            { props.description && 
                <div className="weather-stat">
                    {/* <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.description}/> */}
                        <p style={{textTransform: 'capitalize'}}>{ props.description }</p>
                    <p className="weather-stat-title">Conditions</p>
                </div>
            }
            { props.error && <div className="weather-stat"><p className="error">{ props.error }</p></div> }
        </div>

    </div>  

);
   
export default Weather;