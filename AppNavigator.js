// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Buyer from './view/Buyer/Buyer';
import Seller from './view/Seller/Seller';
import AddSeller from './view/Seller/AddSeller';
import DeleteSeller from './view/Seller/DeleteSeller';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" 
    >
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Buyer" component={Buyer} />
      <Stack.Screen name="Seller" component = {Seller} />
      <Stack.Screen name="AddSeller" component = {AddSeller} /> 
      <Stack.Screen name="DeleteSeller" component = {DeleteSeller} /> 


    </Stack.Navigator>
  );
}

export default AppNavigator;
