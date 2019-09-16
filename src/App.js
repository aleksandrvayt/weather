import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/Weather'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


const API_KEY = "15391a4f19ecd29938a75e759e18b0d3";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    pressure: undefined,
    humidity: undefined,
    currentDate: undefined,
    error: undefined
    
  }

  gettingWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api.json();
    
    if(city && data.name) {
      var sunrise = data.sys.sunrise;
      var date = new Date();
      date.setTime(sunrise);
      var sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      
      var cur = new Date();
      var month = cur.getMonth() + 1;
      var current = cur.getDate() + "-" + month + "-" + cur.getFullYear() + "г" + " " + cur.toLocaleTimeString();
      console.log(data.sys.sunrise);
     
      console.log(cur);   
      console.log(data);  
      
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        currentDate: current,
        error: undefined
        
      });
    }
    else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        pressure: undefined,
        humidity: undefined,
        currentDate: undefined,
        error: <h3>Введите название города</h3>
      });
    } 
    
    
  }
  render() {
    return (
      <div className="wrapper">
        <Info/>
        <Form weatherMethod={this.gettingWeather}/>
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          pressure={this.state.pressure}
          humidity={this.state.humidity}
          currentDate={this.state.currentDate}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
