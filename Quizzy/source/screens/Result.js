import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
    Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Result = ({navigation, route}) => {

    const {points,questionIndex} = route.params;

    console.log(questionIndex)
  return (
      <SafeAreaView>
        <View>
            <View style = {styles.title}>
                <Text style = {styles.text}>RESULT</Text>
            </View>

            <View style = {styles.card}>
                <Text style = {{color:'white', fontSize:30, fontWeight:'800', marginTop:30}}>Your Score is</Text>
                <Text style = {{color:'white', fontSize:30, fontWeight:'800', marginTop:15}}>{points}</Text>
                <Text style = {{color:'white', fontSize:20, fontWeight:'800', marginTop:55}}>Correct Answer : {points/10}</Text>
                <Text style = {{color:'white', fontSize:20, fontWeight:'800', marginTop:15}}>Total Question Attempted : {questionIndex}</Text>
            </View>

            <View style = {{flexDirection:'row', marginTop:40}}>
                <TouchableOpacity
                    onPress = {()=>navigation.navigate("Lobby")}
                >
                    <View style = {styles.container}>
                        <Text style = {styles.text2}>Get Started </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {()=>navigation.goBack()}
                >
                    <View style = {styles.container}>
                        <Text style = {styles.text2}> Retry </Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    </SafeAreaView>
  );
};


export default Result;

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
    title:{
        marginTop:40,
        width:WIDTH,
        alignItems:'center'
    },
    text:{
        fontSize:30,
        fontWeight:'800',
        color:'black'
    },
    card:{
        backgroundColor:'red',
        marginTop:50,
        width:WIDTH-30,
        height:HEIGHT/2,
        marginHorizontal:15,
        borderBottomRightRadius:65,
        borderTopLeftRadius:65,
        alignItems:'center',
        shadowOpacity:1,
        shadowColor:'#000',
        shadowOffset: {width: 5, height:5},
        shadowRadius:5,
    },
    container:{
        backgroundColor:"green",
        borderRadius:20,
        width:170,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 12,
        shadowOpacity:0.5,
        shadowColor:'#000',
        shadowOffset: {width: 2, height:2},
        shadowRadius:3,
        marginTop:40
    },
    text2:{
        fontSize:20,
        fontWeight:'800',
        color:'black'
    },
})