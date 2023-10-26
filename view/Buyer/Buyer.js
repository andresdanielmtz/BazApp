import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BuyerPost from "./BuyerPost"; 
import Events from "./Events/Events"; 

const Buyer = () => {
  const [selectedOption, setSelectedOption] = useState("catalogo"); // null | 'catalogo' | 'eventos'

  const handleSelect = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleSelect('catalogo')}>
          <Text style={selectedOption === 'catalogo' ? styles.selected : styles.unselected}>Catálogo</Text>
        </TouchableOpacity>
        <Text style={styles.divider}>/</Text>
        <TouchableOpacity onPress={() => handleSelect('eventos')}>
          <Text style={selectedOption === 'eventos' ? styles.selected : styles.unselected}>Eventos</Text>
        </TouchableOpacity>
      </View>

      {selectedOption === 'catalogo' && <BuyerPost />}
      {selectedOption === 'eventos' && <Events />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    fontSize: 32
  },
  divider: {
    marginHorizontal: 5,
    color: 'black',
  },
  selected: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  unselected: {
    color: 'gray',
    fontSize: 20
  },
});

export default Buyer;
