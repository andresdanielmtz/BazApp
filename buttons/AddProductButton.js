import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SaveData } from '../view/Seller/saveData';

function AddProductButton(title, subtitle, used, bazar, img, footer) {
  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => SaveData(title, subtitle, used, bazar, img, footer)}
      >
        <Text style={styles.buttonText}>Agregar Producto</Text>
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

  
export default AddProductButton;