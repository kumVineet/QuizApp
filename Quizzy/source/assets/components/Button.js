import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

 const Button = ({text, onPress = () => {} }) => (
    <TouchableOpacity
        style = {styles.button}
        onPress = {()=> {onPress(text)}}
    >
        <Text style = {styles.text}>{text}</Text>
    </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
    button:{
        backgroundColor:'red',
        width:'60%',
        marginTop:20,
        borderRadius:10,
        paddingVertical:16,
        alignItems:'center',
        justifyContent:'center',
        shadowOpacity:0.5,
        shadowColor:'#000',
        shadowOffset: {width: 2, height:2},
        shadowRadius:3,
    },
    text:{
        color:"#fff",
        fontSize:20,
        textAlign:"center",
        fontWeight:'600'
    },
})