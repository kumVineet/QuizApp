import React from 'react';
import {
    FlatList,
  SafeAreaView, 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from "../assets/components/Card";
import {Categories} from "../assets/data/Categories"


const Lobby = ( {navigation} ) => {


  return (
      <SafeAreaView>
          <View>
    <View style = {{justifyContent:'center', alignItems:'center'}}>
      <Text style = {styles.text}>Choose Your Forte</Text>
    </View>
    <View>
        <FlatList
            data = {Categories}
            horizontal = {false}
            showsVerticalScrollIndicator = {false}
            keyExtractor = {(item, index) => String(index)}
            renderItem = {({item}) => (
                <Card
                 Categories = {item}
                />
            )} 
        />
    </View>
    </View>
    </SafeAreaView>
  );
};


export default Lobby;

const styles = StyleSheet.create({
    text:{
        fontSize: 28,
        fontWeight:'800',
        color:'black'
    },
});