import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import MapView from 'react-native-maps';
import Routes from './Routes';

import LoginScreen from './screens/LoginScreen';

export default class App extends Component {
  constructor(){
    super();
        this.state = {
            region: {
                latitude: -16.7336237,
                longitude: -49.2303628,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001
            }
        }
    }

    render() {
        return (
            <Routes />
        );
    }
}
