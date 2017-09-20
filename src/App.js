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

export default class App extends Component {
  render() {
    console.log("render App Class");
    return (
        <Routes />
    );
  }
}
