import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import MapView from 'react-native-maps';

import BubbleCallout from '../components/BubbleCallout';
import CalloutView from '../components/CalloutView';

import { MAP_STYLE } from '../data/MapStyle';
import { mapMarkers } from '../data/Markers';

export default class MapScreen extends Component {
  constructor(props){
      super(props);

      console.log("Constructor MapaScreen Class");

      this.state = {
          markers: mapMarkers
      }
  }

  render() {
    console.log("render MapaScreen Class");
    return (
      <View  style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -16.718470,
            longitude: -49.268932,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }}
          customMapStyle={MAP_STYLE} >

          {
            this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.latlng}
              calloutOffset={{ x: -8, y: 28 }}
              calloutAnchor={{ x: 0.5, y: 0.4 }}
            >

              <MapView.Callout
                style={styles.calloutContainer}
                tooltip
              >
                
                <BubbleCallout>
                  <CalloutView marker={marker} />
                </BubbleCallout>

              </MapView.Callout>

            </MapView.Marker>

          ))}

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calloutContainer: {
    flex: 1,
    width: 275 //Ao modificar width, tem que modificar no BubbleCallout tb
              //TODO: criar um arquivo de constantes
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  map: {
    left : 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
