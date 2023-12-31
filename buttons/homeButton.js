import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function HomeButton({ navigation }) {

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Cliente')}
      >
        <Text style={styles.buttonText}>Iniciar Sesión como Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Vendedor')}
      >
        <Text style={styles.buttonText}>Iniciar Sesión como Vendedor</Text>
      </TouchableOpacity>
    </>
  );

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',  // Change this to your desired color
    padding: 10,
    borderRadius: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
    color: '#000',  // Change this to your desired color
    fontSize: 16,
  },
});

  
export default HomeButton;