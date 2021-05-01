/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lobby from "./source/screens/Lobby";
import Quiz from "./source/screens/Quiz";
import Result from "./source/screens/Result";

const Stack = createStackNavigator();

const App = () => {

  //const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = "Lobby"
        screenOptions = {{headerShown: false}}
      >
        <Stack.Screen name = "Lobby" component = {Lobby}/>
        <Stack.Screen name = "Quiz" component = {Quiz}/>
        <Stack.Screen name = "Result" component = {Result}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
