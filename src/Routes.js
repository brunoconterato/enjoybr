import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import InicioScreen from './screens/InicioScreen';

export default props => (
    <Router>
        <Stack key='root'>
            <Scene key='login' component={LoginScreen} title="Login" hideNavBar/>
            <Scene key='cadastro' component={CadastroScreen} title="" navTransparent/>
            <Scene key='inicio' component={InicioScreen} title="Inicio" type='reset'/>
        </Stack>
    </Router>
);