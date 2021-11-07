import React, {Component, useState} from 'react';
import { Alert, SafeAreaView, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { newTaskStyle } from './newTask.style';
import db from '../../../firebase';

const NewTaskScreen =({navigation}) => {
    const [content, setContent] = useState(null);
    const [title, setTitle] = useState(null);

    function saveNote() {
        db.collection('Tasks').add({
            content: content,
            title: title,
            status: false
        })
        navigation.navigate("Home");
        console.log('note saved');
    }
    return(
        <SafeAreaView style={newTaskStyle.safeAreaView}>
            <View style={newTaskStyle.header}>
                <TouchableOpacity
                style={newTaskStyle.discardButton}
                onPress={() => navigation.navigate('Home')}>
                    <View>
                        <Text style={newTaskStyle.headerDiscard}>Discard</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                style={newTaskStyle.saveButton}
                onPress={saveNote}>
                    <View >
                        <Text style={newTaskStyle.headerSave}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={newTaskStyle.inputBody}>
                <View style={newTaskStyle.inputTitle}>
                    <TextInput
                    placeholder="Note Title Here"
                    placeholderTextColor="#696969"
                    style={newTaskStyle.inputFieldTitle}
                    maxLength={70}
                    multiline
                    numberOfLines={3}
                    onChangeText={setTitle}
                    value={title}/>
                </View>
            </View>
            {/* <View style={newTaskStyle.divider}/> */}
            <ScrollView>
                <View style={newTaskStyle.inputFieldView}>
                    <TextInput
                    placeholder="click me to start writing"
                    placeholderTextColor="#696969"
                    style={newTaskStyle.inputField}
                    enablesReturnKeyAutomatically={true}
                    multiline={true}
                    onChangeText={setContent}
                    value={content}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default NewTaskScreen;