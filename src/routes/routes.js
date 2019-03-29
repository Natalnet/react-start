import React from 'react';
import { Route } from 'react-router-dom';
import LoginScreen from 'screens/autenticacao/LoginScreen';
const routes = (
    <div>
        <Route exact path="/" component={LoginScreen}/>
    </div>
);

export default routes;