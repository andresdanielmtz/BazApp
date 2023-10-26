import React from 'react';
import { StyleSheet, Text, View, Image} from "react-native";
import BuyerJSON from "../../db.json"; 


const BuyerPost = () => {
    const dbArray = BuyerJSON.db;
  
    return (
      <>
        {dbArray.map((item, index) => (
          <View key={index} style={styles.postContainer}>
            <Image source={{ uri: item.img }} style={{ width: '100%', height: 200 }} />
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.subtitleText}>{`${item.subtitle}, ${
              item.used ? 'Usado' : 'Nuevo'
            }`}</Text>
            <Text style={styles.subtitleText}>{item.bazar}</Text>
            <Text style={styles.footerText}>${item.footer}MXN</Text>
          </View>
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


export default BuyerPost;