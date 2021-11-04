import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    safeAreaView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        flex: 1
    },
    loginPage: {
    },
    logoPanel: {
        alignSelf: 'center',
        margin: 55,
    },
    loginPanel: {
        backgroundColor: '#3b3b3b',
        alignSelf: 'center',
        width: '75%',
        borderRadius: 8,
        padding: 12,
        margin: 5
    },
    inputEmail: {
        backgroundColor: '#3b3b3b',
        color: 'white'
    },
    buttonPanel: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '80%',
        marginTop: 20,
    },
    loginButton: {
        backgroundColor: '#1f1d2b',
        borderRadius: 360,
        width: '96%',
        alignSelf: 'center',
        marginBottom: 5
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        margin: 15
    },
    facebookButton: {
    },
    // fab: {                                
    //     position: 'absolute',                                          
    //     bottom: 10,                                                    
    //     right: 10, 
    // },
})

//#1f1d2b BG
//#252525 BG alt
//#3b3b3b interest color
//#ffab91 note1
//#ffcc80 note2
//#e6ee9b note3
//#80deea note4
//#cf93d9 note5
//#80cbc4 note6
//#f48fb1 note7