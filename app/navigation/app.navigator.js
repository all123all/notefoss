import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login/login.screen';
import HomeScreen from '../screens/home/home.screen';
// import RegisterScreen from './screens/register/register.screen';
// import HomeScreen from './screens/home/home.screen';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="Login" headerMode="none">
            <Screen name="Login" component={LoginScreen} />
            <Screen name="Home" component={HomeScreen} />
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;
