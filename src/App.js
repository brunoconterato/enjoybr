import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


import Routes from './Routes';

import LoginScreen from './screens/LoginScreen';

export default class App extends Component {
  render() {
    return (
        <Routes />
    );
  }
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex: 1,
        width: '100%', height: '100%'
    }
});