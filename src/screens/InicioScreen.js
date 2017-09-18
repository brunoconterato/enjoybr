import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';

export default class InicioScreen extends Component {
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
      <View style={styles.container}>
        <MapView.Animated
          style={styles.map}
        >
        </MapView.Animated>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1
    },
  });