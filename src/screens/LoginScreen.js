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

import { FBLogin, FBLoginManager } from '../components/FBLogin';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            user:null
        }
    }

    render() {
        var facebookText = this.state.user ? "Sair do Facebook" : "Entrar com Facebook";

        return (
            <View style={{flex: 1}}>
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
                        
                        <FBLogin style={{ marginBottom: 10, }}
                            ref={(fbLogin) => { this.fbLogin = fbLogin }}
                            facebookText={facebookText}
                            permissions={["email","public_profile"]}
                            loginBehavior={FBLoginManager.LoginBehaviors.Native}
                            onClickColor={'transparent'}
                            onLogin={ (data) => {
                              console.log("Logged in!");
                              console.log(data);
                              this.setState({ user : data.credentials });
                              console.log("email: " + data.profile.email);
                              Actions.cadastro({
                                first_name: data.profile.first_name,
                                last_name: data.profile.last_name,
                                email: data.profile.email
                              });
                            }}
                            onLogout={ () => {
                              console.log("Logged out.");
                              this.setState({ user : null });
                              Actions.main();
                            }}
                            onLoginFound={ (data) => {
                              console.log("Existing login found.");
                              console.log(data);
                              this.setState({ user : data.credentials });
                            }}
                            onLoginNotFound={ () => {
                              console.log("No user logged in.");
                              this.setState({ user : null });
                            }}
                            onError={ (data) => {
                              console.log("ERROR");
                              console.log(data);
                              Actions.main();
                            }}
                            onCancel={ () => {
                              console.log("User cancelled.");
                              Actions.main();
                            }}
                            onPermissionsMissing={ (data) => {
                              console.log("Check permissions!");
                              console.log(data);
                              Actions.main();
                            }}
                        />
                        
                    </View> 
                    <View style={{backgroundColor: '#DC4E41', marginHorizontal: 30, marginVertical: 10, alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10}}>
                        <TouchableHighlight underlayColor='transparent' onPress={()=>{Actions.cadastro();}}>
                            <Text style={{fontSize: 18, color: '#fff'}}>
                                Entrar com o Google+
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