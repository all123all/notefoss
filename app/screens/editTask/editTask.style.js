import {StyleSheet} from "react-native";

export const editTaskStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#000'
    },
    header: {
        flexDirection: 'row',
        marginTop: 28,
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    divider: {
        height: 1,
        backgroundColor: '#696969',
        width: '95%',
        alignSelf: 'center',
        marginTop: 12
    },
    saveButton: {
        width: '35%',
        alignItems: 'center'
    },
    headerSave: {
        color: 'white',
        fontSize: 23
    },
    discardButton: {
        width: '35%',
        alignItems: 'center'
    },
    headerDiscard: {
        color: 'white',
        fontSize: 23
    },
    inputBody: {
        marginTop: 35,
    },
    inputTitle: {
        padding: 8
    },
    inputFieldView: {
        marginTop: 12,
    },
    inputTitleField: {
        justifyContent: 'flex-start'
    },
    inputFieldTitle: {
        fontSize: 33,
        color: 'white'
    },
    inputField: {
        color: 'white',
        fontSize: 16,
        padding: 8,
    },
})