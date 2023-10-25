import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function AddContentButton({ navigation }) {

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('AddSellerGet')}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </>
  );

}

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    backgroundColor: '#00192A',
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: .25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',  // Change this to your desired color
    fontSize: 32,
  },
});

  
export default AddContentButton;