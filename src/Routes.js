import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';

export default props => (
    <Router>
        <Scene key='login' component={LoginScreen} title="Login" />
        <Scene key='cadastro' component={CadastroScreen} title="Tela de Cadastro" />
    </Router>
);