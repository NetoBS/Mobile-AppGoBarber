import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createNativeStackNavigator ();

const AuthRoutes: React.FC = () => (
    
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#312a38' },
        }}
    >
        <Auth.Screen name="SingIn" component={SignIn} />
        <Auth.Screen name="SingUp" component={SignUp} />
    </Auth.Navigator>
    
);

export default AuthRoutes;