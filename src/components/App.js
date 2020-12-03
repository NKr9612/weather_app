import './App.css';
import Form from './Form';
import Results from './Results';
import React from 'react';
// przypisanie klucza do zmiennej globalnej
const APIKey = 'fed3abb9cec06bbb3047b41d0f74a0d4';

class App extends React.Component{
  state= {
    value: '',
    temp:'',
    tempOdczuw: '',
    tempMin:'',
    tempMax:'',
    pressure:'',
    humidity:'',
    windSpeed:'',
    country:'',
    sunrise:'',
    sunset:'',
    city:'',
    date:'',
    err:false,

  }
  // przypisanie wartości inputa do 'value' ze state, żeby moc na niej operować
  handleChange = e =>{
   this.setState({
     value: e.target.value,
   })
  }
//wywołanie fetchowania po kliknięciu, operacje na nim (sprawdzanie, czy nie ma błędu, wychwycenie wyjątku, przekształcenie do json i )
  click = e =>{
    e.preventDefault();
   //przypisanie adresu do zmiennej
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(API)
    .then(response => {
      if(response.ok){
        return response;
      }
      throw Error("Nie znaleziono")
    })
    .then(response => response.json())
    .then(response => {
      const todayDate = new Date().toLocaleDateString();
      this.setState(prevState => ({
        temp: response.main.temp,
        tempOdczuw: response.main.feels_like,
        tempMin: response.main.temp_min,
        tempMax:response.main.temp_max,
        pressure: response.main.pressure,
        humidity: response.main.humidity,
        windSpeed: response.wind.speed,
        country:response.sys.country,
        sunrise:response.sys.sunrise,
        sunset:response.sys.sunset,
        err:false,
        city: prevState.value,
        date:todayDate, 

      }))
    })
    .catch(err => {
      this.setState({
        err: true,
      }
      )}
      )
    }

  render(){
    return (
      <> 
      <Form handleChange = {this.handleChange}
      click = {this.click}/>
     { this.state.err === false? <Results value = {this.state.value}
      state = {this.state}/> : <div>Nie ma takiego miasta w bazie</div>}
      </>
    )
  }
}

export default App;
