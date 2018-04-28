import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import Forecast from './components/Forecast'
import RecentSearch from './components/RecentSearch'


class App extends Component {
  constructor() {
    super();

    this.state = {
      cityName: '',
      stateName: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      forecast: '',
      places: [],
      header: 'Enter City',
      conditions: ''
    }
  }

  getWeather = (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const stateToSearch = e.target.elements.stateToSearch.value

    axios.get(`http://api.wunderground.com/api/56eb80e608307034/forecast10day/q/${this.state.cityName}/${this.state.stateName}.json`)
      .then(res => {
        this.setState({
          conditions: res.data.forecast.simpleforecast.forecastday.day.date.weekday.map(day => day.date.weekday),
          weekdays: res.data.forecast.simpleforecast.forecastday.day.high.fahrenheit.map(day => day.high.fahrenheit),
          highs: res.data.forecast.simpleforecast.forecastday.day.low.fahrenheit.map(day => day.low.fahrenheit),
          lows: res.data.forecast.simpleforecast.forecastday.day.conditions.map(day => day.conditions),
          header: '5 Day Forecast',
          cityName: city,
        })
        console.log(this.state.forecast)
    })
  }

  componentDidMount() {
    axios.get('/api/places').then(res => {
     this.setState({ places: res.data })
      console.log('hello')
   })
 }

  addPlaces(city) {
    axios.post('/api/places').then(res => {
      console.log('Works')
    })
  }

render() {
  return (
      <div className="main-container">
        <h1>{'DevWeather /'}</h1>
        <WeatherForm
          getWeather={this.getWeather}
          stateName={this.state.stateName}
          city={this.state.cityName} />
        <h1>{'5 Day Forecast'}</h1>
        <Forecast
          forecast={this.state.forecast} />
        <h1>{'Recent Searches'}</h1>
        <RecentSearch
          places={this.state.places}
          getPlaces={this.getPlaces} />
      </div>
    );
  }
}

export default App;