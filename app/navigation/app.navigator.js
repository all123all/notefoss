import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login/login.screen';
import HomeScreen from '../screens/home/home.screen';
import NewTaskScreen from '../screens/newTask/newTask.screen';
import EditTaskScreen from '../screens/editTask/editTask.screen';

const { Navigator, Screen } = createStackNavigator();
const Stack = createStackNavigator();

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode="none">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="NewTask" component={NewTaskScreen} />
                <Stack.Screen name="EditTask" component={EditTaskScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
