import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack =createStackNavigator();

function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator  initialRouteName = "HomeScreen" screenOptions={{
        headerShown :false
      }} >
       <Stack.Screen name = "HomeScreen" component= {HomeScreen}/>
       <Stack.Screen name = "DailyPic" component = {DailyPic}/>
       <Stack.Screen name = "SpaceCrafts" component={SpaceCrafts}/>
       <Stack.Screen name = "StarMap" component = {StarMap}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;

