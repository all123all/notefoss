import React, {Component, useState} from 'react';
import { Alert, SafeAreaView, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { editTaskStyle } from './editTask.style';
import database from '../../../firebase';

export default function EditTaskScreen ({navigation, route}) {

    const [editContent, setEditContent] = useState(route.params.content);
    const [editTitle, setEditTitle] = useState(route.params.title);
    //const idTask = route.params.id; 

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idTask = route.params.id

    // function saveTask(content, id) {
    //     db.collection("Tasks").doc(id).update({
    //         content: editContent,
    //     })
    //     navigation.navigate('Home');
    // }

    function saveTask(content, id){
        database.collection("Tasks").doc(id).update({
          content: editContent,
        })
        navigation.navigate("Home")
      }
    return(
        <SafeAreaView style={editTaskStyle.safeAreaView}>
            <View style={editTaskStyle.header}>
                <TouchableOpacity
                style={editTaskStyle.discardButton}
                onPress={() => navigation.navigate('Home')}>
                    <View>
                        <Text style={editTaskStyle.headerDiscard}>Discard</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                style={editTaskStyle.saveButton}
                onPress={() => {saveTask(editContent, idTask)}}>
                    <View >
                        <Text style={editTaskStyle.headerSave}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={editTaskStyle.inputBody}>
                <View style={editTaskStyle.inputTitle}>
                    <TextInput
                    placeholder="Note Title Here"
                    placeholderTextColor="#696969"
                    style={editTaskStyle.inputFieldTitle}
                    maxLength={70}
                    multiline
                    numberOfLines={3}
                    onChangeText={setEditTitle}
                    value={editTitle}
                    />
                </View>
            </View>
            {/* <View style={editTaskStyle.divider}/> */}
            <ScrollView>
                <View style={editTaskStyle.inputFieldView}>
                    <TextInput
                    placeholder="click me to start writing"
                    placeholderTextColor="#696969"
                    style={editTaskStyle.inputField}
                    enablesReturnKeyAutomatically={true}
                    multiline={true}
                    onChangeText={setEditContent}
                    value={editContent}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
