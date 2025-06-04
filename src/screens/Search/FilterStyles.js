import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        padding: 10,
        
    },
    headerContainer:{
        flexDirection:'row',
        marginTop:50,
    },
    homeTypeButton: {
        height: 50,
        width: 130,
        backgroundColor: 'lightblue',
        marginLeft: 10,
        borderRadius: 25,
        color:'green',
        borderWidth:3,
        borderColor:'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        
    },
})