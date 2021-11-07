import React, {Component, useEffect, useState} from 'react';
import { Alert, SafeAreaView, View, Text, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { homeStyle } from './home.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import db from '../../../firebase';

const HomeScreen =({navigation}) => {
    const [task, setTask] = useState([]);

    function deleteTask(id){
        db.collection("Tasks").doc(id).delete;
    }

    useEffect(() => {
        db.collection("Tasks").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({...doc.data(), id: doc.id})
            })
            setTask(list)
        })
    }, [])
//PRECISO ARRUMAR A FLATLIST PARA NÃO FICAR BUGADA COM O SCROLLVIEW
    const ItemView = ({item}) => {
        return(
            <TouchableOpacity
            onPress={() => {navigation.navigate("EditTask", {
                content: item.content,
                title: item.title
            })}}>
                <View style={homeStyle.pageBody}>
                    <View style={homeStyle.cardPreview}>
                        <Text style={homeStyle.cardPreviewTitle}>{item.title}</Text>
                        <Text style={homeStyle.cardPreviewText}>{item.content}</Text>
                        <Text style={homeStyle.dateText}>November, 5, 2021</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView style={homeStyle.safeAreaView}>
            <View style={homeStyle.header}>
                <View style={homeStyle.headerTitleView}>
                    <Text style={homeStyle.headerTitleText}>Notes</Text>
                </View>
            </View>
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={task}
                    renderItem={ItemView}/>
                    
            </View>
            <TouchableOpacity
                style={homeStyle.fab}
                onPress={() => navigation.navigate('NewTask')}>
                <Icon name="plus" color="white" size={20}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default HomeScreen;