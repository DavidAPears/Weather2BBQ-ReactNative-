import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import {ImageBackground} from 'react-native';
import DatePicker from 'react-native-datepicker';
import CircleSlider from 'react-native-circle-slider';

import { Font } from 'expo';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  location: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
      width: '80%',
      alignSelf: 'center'
    },
  },
  controlLabel: {
    normal: {
      color: 'transparent',
      fontSize: 0,
      marginBottom: 7,
      fontWeight: 'bold'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}


const options = {
  fields: {
    location: {
      placeholder: "Where are you getting married?",
      placeholderTextColor: "#24b599",
      error: 'Please enter a place or postcode',
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold',
      opacity: '50%'
    },
    date: {
      mode: 'date',
      dialogMode: 'spinner'
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {


  state = {
   fontLoaded: false,
   dateSelected: 0
 };

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-raleway': require('./assets/fonts/Raleway-Regular.ttf'),
    });

     this.setState({ fontLoaded: true });
  }

  convertSecondsToCalendarDate(){
    var fractionOfYear = this.state.dateSelected / 365;
    var secondsInAYear = 31536000;
    var seconds = fractionOfYear * secondsInAYear;

    var dateToDisplay = new Date(seconds * 1000);
    var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
    var month = months[dateToDisplay.getMonth()];
    var date = dateToDisplay.getDate();

    return `${date} ${month}`;
  }

  getVal(val) {
        console.warn(val);
    }

  render() {
    var self = this;
    return (
      <ImageBackground
               source={require('./assets/bride8.jpeg')}
               style={styles.backgroundStyle}
               >

      <View style={styles.container}>
      {
   this.state.fontLoaded ? (

     <View>
     <Text style={{ fontFamily: 'open-raleway', paddingBottom: '7.5%', fontSize: 40, textAlign: 'center', fontWeight: 'bold', color: "#24b599"}}>
       Weather2Wed
     </Text>
     </View>
   ) : null
 }
        <View style={{paddingBottom: '10%'}}>
        <Form
          style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: "#24b599"}}
          ref={c => this._form = c}
          type={User}
          options={options}
          color="#12D8FA"
          textAlign="center"
          underlineColorAndroid="rgba(0,0,0,0)"
        />
        </View>

        <View style={{ width: '100%', height: '50%', alignItems: 'center'}}>
        <CircleSlider style={{position: 'relative', top: '10%', paddingTop: '100%'}}
			arcDirection={'CW'}
            backgroundColor={"white"}
            value={0}
            btnRadius={15}
            btnColor={'#24b599'}
            sliderRadius={110}
            sliderWidth={25}
            startDegree={0}
            maxValue={370.069444444}
            onPressInnerCircle={(value) => console.log(`Inner: ${value}`)}
            onPressOuterCircle={(value) => console.log(`Outer: ${value}`)}
            onValueChange={val => this.setState({ dateSelected: val })}
            onSlidingComplete={val => this.getVal(val)}
            endGradient={"#A6FFCB"}
            startGradient={"#12D8FA"}
            showValue={'true'}
            textColor={'black'}
            textSize={20}
		/>
    <Text style={{fontSize: 20, color: "#24b599"}}>
    {`${this.convertSecondsToCalendarDate()}`}
    </Text>
    </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.button}
        onPress={()=>{alert(`😄${this.state.dateSelected}Weather data to be shown here Weather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown hereWeather data to be shown here`)}}
        >
        <Image source={require('./assets/weather2wed_button.jpg')} style={{height: '60%', width: '52%'}}/>
        </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: 45,
    padding: 20,
    backgroundColor: 'transparent'
  },
  buttonContainer: {
    alignItems: 'center',
    height: '25%'
  },
  backgroundStyle: {
    width: '100%',
    height: '100%'
  },
  button: {
    alignItems: 'center',
    position: 'absolute',
    top: '20%',
    height: '100%',
    width: '50%'
  }
});
