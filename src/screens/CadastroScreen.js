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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';

export default class CadastroScreen extends Component {
  render() {
    return (
        <KeyboardAwareScrollView style={styles.view}>
            <ScrollView>
                <View style={{alignItems: 'center', paddingVertical: 25}}>
                    <View style={{marginBottom: 10, height: 40, width:'75%', justifyContent: 'center'}}>
                        <Text style={{fontSize: 35, fontWeight: '800', color: '#096D33', textAlign: 'center'}}> Conclua seu cadastro </Text>
                    </View>
                </View>
                <View style={styles.viewForm}>
                    <View>
                        <TextInput underlineColorAndroid='transparent' placeholder='Primeiro nome' placeholderTextColor='rgba(000,000,000,0.7)' style={styles.textInputForm} autoCapitalize='words' />
                        <TextInput underlineColorAndroid='transparent' placeholder='Segundo nome' placeholderTextColor='rgba(000,000,000,0.7)' style={styles.textInputForm} autoCapitalize='words' />
                        <TextInput underlineColorAndroid='transparent' placeholder='Email' placeholderTextColor='rgba(000,000,000,0.7)' style={styles.textInputForm} keyboardType='email-address' />
                        <TextInput underlineColorAndroid='transparent' placeholder='CPF' placeholderTextColor='rgba(000,000,000,0.7)' style={styles.textInputForm} keyboardType='numeric' />
                        <TextInput underlineColorAndroid='transparent' placeholder='Telefone' placeholderTextColor='rgba(000,000,000,0.7)' style={styles.textInputForm} keyboardType='phone-pad' />
                        <TextInput underlineColorAndroid='transparent' placeholder='Senha' placeholderTextColor='rgba(000,000,000,0.7)' style={styles.textInputForm} secureTextEntry />
                        <TextInput underlineColorAndroid='transparent' placeholder='Confirmar senha' placeholderTextColor='rgba(000,000,000,0.7)' style={styles.textInputForm} secureTextEntry />
                        <View style={{backgroundColor: '#096D33', marginHorizontal: 30, marginBottom: 50, alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10}}>
                            <TouchableHighlight>
                                <Text style={{fontSize: 18, color: '#fff'}} onPress={()=>{Actions.inicio()}}>
                                    Concluir cadastro 
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>          
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
        height: 40, 
        borderColor: 'black',
        borderWidth: 0.5, 
        borderRadius: 10, 
        marginBottom: 8, 
        paddingHorizontal: 10
    },
    textForm: {
        marginBottom: 20,
        fontSize: 15,
        color: color1,
        textAlign: 'center'
    }
});