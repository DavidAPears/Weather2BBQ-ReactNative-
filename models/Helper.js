import React, { Component } from 'react';
import axios from 'axios';

const Helper = function (){
  weatherDataLoaded: false;
  data: null;
}

// returnWeatherData = function(){
//
//   console.log("DATA", this.data);
//   return this.data;
//
// }

getWeatherData = function(location, seconds){
    const url = `http://weather2wed.herokuapp.com/weather/${location}/${seconds}`
    console.log("RETRIEVING WEAther");
    axios.get(url).then(response => {
      this.data = response.data;
      console.log("data", this.data);
      return this.data
}).catch(function(error){
  console.log(error);
  console.log("Error fetching weather data.");
})
}

// export default class Weather extends Component {
//
//   state = {
//     weatherDataLoaded: false,
//     data: null
//   }
//
//   getWeatherData(location, seconds){
//       const url = `http://localhost:8083/weather/${location}/${seconds}`
//
//       axios.get(url).then(response => {
//         this.setState({
//           weatherDataLoaded: true,
//           data: response.data,
//         })
//   }).catch(function(error){
//     console.log(error);
//     console.log("Error fetching weather data.");
//   })
//   }
// }

export function getWeatherData(){}
export function returnWeatherData(){}
export default Helper
