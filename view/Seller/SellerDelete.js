import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Alert } from 'react-native';
import BuyerJSON from '../../db.json';
import { DeleteData } from './deleteData';


const SellerDelete = () => {
  const dbArray = BuyerJSON.db;
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostSelection = (index) => {
    DeleteData(index);
  };

  const createTwoButtonAlert = (id) =>
    Alert.alert('¿Deseas eliminar el producto?', 'No podrás deshacer esta acción', [ {
      text: 'Cancelar',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => handlePostSelection(id)},
  ]);

  return (
    <>
      {dbArray.map((item, index) => (
        <TouchableOpacity
          style={[
            styles.postContainer,
            selectedPost === index ? { backgroundColor: 'lightblue' } : null,
          ]}
          onPress={() => createTwoButtonAlert(item.id)}
        >
          <Image source={{ uri: item.img }} style={{ width: '100%', height: 200, borderRadius: 20 }} />
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.subtitleText}>{`${item.subtitle}, ${item.used ? 'Usado' : 'Nuevo'}`}</Text>
          <Text style={styles.subtitleText}>{item.bazar}</Text>
          <Text style={styles.footerText}>${item.footer}MXN</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    margin: 10
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 14,
    marginTop: 5,
  },
  footerText: {
    fontSize: 12,
    marginTop: 5,
    color: 'grey',
  },
});

export default SellerDelete;
