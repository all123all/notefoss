import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#000'
    },
    scrollView: {
        display: 'flex',
        backgroundColor: '#000',
    },
    header:{
        flexDirection: 'row',
        width: '90%',
        marginTop: 28,
        alignContent: 'center',
        paddingBottom: 15,
        //paddingLeft: 18
    },
    headerTitleView:{
        paddingLeft: 11
    },
    headerTitleText: {
        color: 'white',
        fontSize: 38
    },
    headerButtonView: {
        backgroundColor: '#3b3b3b',
        padding: 12,
        paddingBottom: 13,
        borderRadius: 8,
        //justifyContent: 'flex-end'
    },
    pageBody:{
        marginTop: 8,
    },
    cardPreview: {
        borderRadius: 4,
        borderColor: '#fff',
        borderWidth: 0.2,
        padding: 18,
        marginTop: 8,
        width: '90%',
        alignSelf: 'center'
    },
    cardPreviewTitle: {
        fontSize: 22,
        color: 'white',
    },
    cardPreviewText: {
        color: 'white',
    },
    dateText: {
        color: '#696969'
    },
    fab: {                                
        position: 'absolute',                                          
        bottom: 30,                                                    
        right: 20,
        backgroundColor: '#252525',
        width: 60,
        height: 60,
        borderRadius: 360,
        alignItems: 'center',
        justifyContent: 'center',
    },
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