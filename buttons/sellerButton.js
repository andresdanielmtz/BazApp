import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function SellerButton({ navigation }) {

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Agrega Producto')}
      >
        <Text style={styles.buttonText}>Agregar Producto</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Elimina Producto')}
      >
        <Text style={styles.buttonText}>Eliminar Producto</Text>
      </TouchableOpacity>
    </>
  );

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00192A',  // Change this to your desired color
    padding: 10,
    borderRadius: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',  // Change this to your desired color
    fontSize: 16,
  },
});

  
export default SellerButton;