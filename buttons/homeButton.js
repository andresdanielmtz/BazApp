import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function HomeButton({ navigation }) {

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Buyer')}
      >
        <Text style={styles.buttonText}>Iniciar Sesión como Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Seller')}
      >
        <Text style={styles.buttonText}>Iniciar Sesión como Vendedor</Text>
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

  
export default HomeButton;