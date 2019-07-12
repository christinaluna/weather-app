import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Footer from './components/Footer';

const KEY = process.env.REACT_APP_KEY;

class App extends React.Component {
  state = { 
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${KEY}&units=imperial`);
    const data = await response.json();

    if(city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState( {
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter a city and country.'
      })
    }
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="wrapper">
          <div className="app-container">
            <Titles />
            <Form getWeather={this.getWeather} />
            <Weather
              city={this.state.city}
              country={this.state.country}
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error} />
              <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;