import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapaComponent from '../components/MapaComponent';
import { Actions } from 'react-native-router-flux';

export default class InicioScreen extends Component {

  render() {
    return (
      <MapaComponent />
    );
  }
}
