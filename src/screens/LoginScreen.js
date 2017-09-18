import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginScreen extends Component {
  render() {
    return (
        <View style={{flex: 1, marginTop: 50}}>
            <Image source={require('../imgs/background_green.png')} style={styles.backgroundImage}>
                <View style={{alignItems: 'center'}}>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../imgs/logo_petrobras.png')}/>
                    </View>
                    <View style={{alignItems: 'center', width: 200, height: 200}}>
                        <Image source={require('../imgs/logo_tamojunto.png')} style={{width: '100%', height: '100%', resizeMode: 'contain'}}/>  
                    </View>
                </View>
                <View style={{backgroundColor: '#3B5998', marginHorizontal: 30, alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10}}>
                    <TouchableHighlight underlayColor='transparent' onPress={()=>{Actions.cadastro();}}>
                        <Text style={{fontSize: 18, color: '#fff'}}>
                            Entrar com meu Facebook
                        </Text>
                    </TouchableHighlight>
                </View> 
                <View style={{backgroundColor: '#DC4E41', marginHorizontal: 30, marginVertical: 10, alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10}}>
                    <TouchableHighlight underlayColor='transparent' onPress={()=>{Actions.cadastro();}}>
                        <Text style={{fontSize: 18, color: '#fff'}}>
                            Entrar com meu Google+
                        </Text>
                    </TouchableHighlight>
                </View> 
            </Image>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex: 1,
        width: '100%', height: '100%'
    }
});