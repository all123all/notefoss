import React, {Component, useState} from 'react';
import { Alert, SafeAreaView, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { loginStyle } from './login.style';
import { Input, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const LoginScreen =() => {
    //navigation
    const { navigate } = this.props.navigation;
    const login = () => navigate("Home");

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
                        onPress={login}
                        style={loginStyle.loginButton}>
                            <Text style={loginStyle.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <SocialIcon
                                title='Login With Facebook'
                                button
                                type='facebook'
                                style={loginStyle.facebookButton}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <SocialIcon
                                title='Login With Instagram'
                                button
                                light
                                type='instagram'
                                style={loginStyle.instagramButton}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default LoginScreen;