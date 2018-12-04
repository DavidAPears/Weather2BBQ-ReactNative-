import React, { Component } from 'react';
import axios from 'axios';

export default class Coordinates extends Component {

  state = {
    coordinatesDataLoaded: false,
    data: null
  }

  getCoordinates(location){
    const url = `http://localhost:8080/longlat/${location}`

      axios.get(url).then(response => {

        this.setState({
          coordinatesDataLoaded: true,
          position: [parseFloat(response.items[0].lat), parseFloat(response.items[0].long)],
        })
  }).catch(function(error){
    console.log(error);
    console.log("Error fetching coordinates data.");
  })
  }
}


<TouchableOpacity onPress={this.toggleModal} style={{justifyContent: 'center'}}>
<View>
  <Image source={require('./assets/darksky.png')} style={{position: 'relative', top: '0%', height: '40%', width: '70%'}}/>
</View>
</TouchableOpacity>
