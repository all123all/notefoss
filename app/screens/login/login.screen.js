import React, {Component, useState} from 'react';
import { Alert, SafeAreaView, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { loginStyle } from './login.style';
import { Input, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen =({navigation}) => {
    //navigation
    //const { navigate } = this.props.navigation;
    const login = () => props.navigation.navigate("Home");

    const handleLogin = ()=> {
        login();
    }

    return(
        <SafeAreaView style={loginStyle.safeAreaView}>
            <ScrollView>
                <View style={loginStyle.loginPage}>
                    <View style={loginStyle.logoPanel}>
                        <Icon name="tasks" color="white" size={40}/>
                    </View>
                    <View style={loginStyle.loginPanel}>
                        <TextInput
                        placeholder="Email"
                        placeholderTextColor="#696969"
                        style={loginStyle.inputEmail}/>
                    </View>
                    <View style={loginStyle.loginPanel}>
                        <TextInput
                        placeholder="Password"
                        placeholderTextColor="#696969"
                        style={loginStyle.inputEmail}
                        secureTextEntry={true}/>
                    </View>
                    <View style={loginStyle.buttonPanel}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                        style={loginStyle.loginButton}>
                            <Text style={loginStyle.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default LoginScreen;