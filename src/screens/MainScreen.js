import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import MapScreen from '../screens/MapScreen';

export default class MainScreen extends Component {

  render() {
    return (
      <View>

      	<TouchableHighlight
      		onPress={() => { Actions.mapa() }}
      	>
      		<Text style={styles.text}>Acesse o mapa</Text>
      	</TouchableHighlight>

      	<TouchableHighlight
      		onPress={() => { Actions.login() }}
      	>
      		<Text style={styles.text}>Faça Login</Text>
      	</TouchableHighlight>

      	<TouchableHighlight
      		onPress={() => { Actions.cadastro() }}
      	>
      		<Text style={styles.text}>Cadastre-se</Text>
      	</TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	text: {
		marginTop: 20,
	}
});
