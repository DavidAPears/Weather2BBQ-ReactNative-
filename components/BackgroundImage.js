import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
} from 'react-native';

const remote = 'https://www.easyweddings.com.au/articles/wp-content/uploads/sites/5/2016/12/wet-weather-900x600.jpg';

export default class BackgroundImage extends Component {
  render() {
    const resizeMode = 'center';

    return (
      <Image
        style={{
          flex: 1,
          resizeMode,
        }}
        source={{ uri: remote }}
      />
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
