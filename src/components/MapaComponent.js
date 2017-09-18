import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';

export default class MapaComponent extends Component {
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
        <MapView style={styles.map} region={this.state.region} />
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
  });