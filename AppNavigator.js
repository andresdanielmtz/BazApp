// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Buyer from './view/Buyer/Buyer';
import Seller from './view/Seller/Seller';
import AddSeller from './view/Seller/AddSeller';
import DeleteSeller from './view/Seller/DeleteSeller';
import AddSellerGet from './view/Seller/AddSellerGet';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" 
    >
      <Stack.Screen name="Inicio" component={Home}/>
      <Stack.Screen name="Cliente" component={Buyer} />
      <Stack.Screen name="Vendedor" component = {Seller} />
      <Stack.Screen name="Agrega Producto" component = {AddSeller} /> 
      <Stack.Screen name="Elimina Producto" component = {DeleteSeller} /> 
      <Stack.Screen name="Llena tu Formulario" component = {AddSellerGet} />

    </Stack.Navigator>
  );
}

export default AppNavigator;
