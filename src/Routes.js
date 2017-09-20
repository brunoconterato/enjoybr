import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import InicioScreen from './screens/InicioScreen';

const Routes = () => (
    <Router>
        <Stack key='root'>
            <Scene key='inicio' component={InicioScreen} initil title="Inicio" type='reset' />
            <Scene key='login' component={LoginScreen} title="Login" hideNavBar />
            <Scene key='cadastro' component={CadastroScreen} title="" navTransparent />
        </Stack>
    </Router>
);

export default Routes;
