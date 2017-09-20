import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class CalloutView extends Component {
  constructor(props) {
    super(props);
    
    console.log("Constructor CalloutView Class");

    this.state = {
      marker: this.props.marker
    }
  }

  render() {
    return (
      <View>
        <Text>Nome: {this.state.marker.title}</Text>
        <Text style={ {paddingTop: 10} }>Descrição: {this.state.marker.description}</Text>
        <Text style={ {paddingTop: 10} }>Serviços Petrobras Disponíveis:</Text>
        <View>
          {this.state.marker.services.map( (item, value) => ( <Text key={value}>- {item}</Text> ) )}
        </View>
      </View>
    );
  }
}
