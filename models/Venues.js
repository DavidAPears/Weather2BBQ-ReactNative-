import React, { Component } from 'react';
import axios from 'axios';

export default class Venues extends Component {

  state = {
    venuesDataLoaded: false,
    data: null
  }

  getVenuesData(location){
const url = `http://localhost:8080/hotel/${location}`

      axios.get(url).then(response => {
        this.setState({
          venuesDataLoaded: true,
          data: response.data,
        })
  }).catch(function(error){
    console.log(error);
    console.log("Error fetching venues data.");
  })
  }
}
