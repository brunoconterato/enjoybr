import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import MainScreen from './screens/MainScreen';
import MapScreen from './screens/MapScreen'

const Routes = () => (
    <Router>
        <Stack key='root'>
            <Scene key='main' component={MainScreen} initil title="Inicio" type='reset' />
            <Scene key='login' component={LoginScreen} title="Login" hideNavBar />
            <Scene key='cadastro' component={CadastroScreen} title="Cadastro" navTransparent />
            <Scene key='mapa' component={MapScreen} title="Mapa" />
        </Stack>
    </Router>
);

export default Routes;
