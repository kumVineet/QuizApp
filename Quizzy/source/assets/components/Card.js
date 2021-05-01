import React from 'react';
import {
    ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Card = ({Categories}) => {

    const navigation = useNavigation()

    return(
        <View style = {{flex:1, paddingTop:20, paddingBottom:20, paddingRight:20, paddingLeft:20, justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress = {() => navigation.navigate("Quiz", { Categories } ) }>
                <ImageBackground
                    source = {Categories.image}
                    style = {styles.container}
                    imageStyle = {{borderRadius: 30}}
                >
                    <Text style = {styles.text}>{Categories.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container:{
        width: 300,
        height:200,
        justifyContent:'center',
        alignItems:'center',
        shadowOpacity:1,
        shadowColor:'#000',
        shadowOffset: {width: 5, height:5},
        shadowRadius:5,
    },
    text:{
        fontSize: 18,
        fontWeight: '800',
        color: 'white'
    },
})