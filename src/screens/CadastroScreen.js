import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class CadastroScreen extends Component {
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.view}>
            <ScrollView>
                <View style={{alignItems: 'center', paddingVertical: 25}}>
                    <View style={{marginTop: 60, marginBottom: 10, height: 40, width:'75%', justifyContent: 'center'}}>
                        <Text style={{fontSize: 35, fontWeight: '800', color: '#096D33', textAlign: 'center'}}> Conclua seu cadastro </Text>
                    </View>
                </View>
                <View style={styles.viewForm}>
                    <View>
                        <TextInput placeholder='Primeiro nome' placeholderTextColor='rgba(000,000,000,0.7)' style={{height: 40, borderColor: 'black', borderWidth: 0.5, borderRadius: 10, marginBottom: 8, paddingHorizontal: 10}}/>
                        <TextInput placeholder='Segundo nome' placeholderTextColor='rgba(000,000,000,0.7)' style={{height: 40, borderColor: 'black', borderWidth: 0.5, borderRadius: 10, marginBottom: 8, paddingHorizontal: 10}}/>
                        <TextInput placeholder='Email' placeholderTextColor='rgba(000,000,000,0.7)' style={{height: 40, borderColor: 'black', borderWidth: 0.5, borderRadius: 10, marginBottom: 8, paddingHorizontal: 10}}/>
                        <TextInput placeholder='CPF' placeholderTextColor='rgba(000,000,000,0.7)' style={{height: 40, borderColor: 'black', borderWidth: 0.5, borderRadius: 10, marginBottom: 8, paddingHorizontal: 10}}/>
                        <TextInput placeholder='Telefone' placeholderTextColor='rgba(000,000,000,0.7)'style={{height: 40, borderColor: 'black', borderWidth: 0.5, borderRadius: 10, marginBottom: 8, paddingHorizontal: 10}}/>
                        <View style={{backgroundColor: '#096D33', marginHorizontal: 30, marginBottom: 50, alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10}}>
                            <TouchableHighlight>
                                <Text style={{fontSize: 18, color: '#fff'}}>
                                    Concluir cadastro 
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>          
    );
  }
}

// const styles = StyleSheet.create({
//     backgroundImage:{
//         flex: 1,
//         width: '100%', height: '100%'
//     }
// });

const color1 = '#293846';
//const color2 = '#337AB7';
const color3 = '#1ab394';
//const color4 = '#32BEA6';
const color5 = '#f3f3f4';

const styles = StyleSheet.create({
    view: {
        flex: 1, 
        padding: 10,
        backgroundColor: color5,
       
    },
    viewTitulo: {
        flexGrow: 1,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitulo: {
        fontSize: 80,
        fontWeight: '800',
        color: 'rgba(103,106,108,0.4)' 
    },
    textTitulo2: {
        fontSize: 18,
        color: '#2f4050',
        textAlign: 'center',
        width: '75%',
        opacity: 0.5
    },
    textInputForm: {
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: color3,
        backgroundColor: 'rgba(255,255,255,1)',
        paddingHorizontal: 10,
        fontSize: 20,
        height: 45,
        color: color1
    },
    textForm: {
        marginBottom: 20,
        fontSize: 15,
        color: color1,
        textAlign: 'center'
    }
});