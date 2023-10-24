// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Buyer from './view/Buyer';
import Seller from "./view/Seller"; 

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Buyer" component={Buyer} />
      <Stack.Screen name="Seller" component = {Seller} /> 


    </Stack.Navigator>
  );
}

export default AppNavigator;
