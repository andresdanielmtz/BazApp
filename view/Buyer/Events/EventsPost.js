import React from "react";
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableHighlight, Alert, Linking, Platform } from "react-native";
import EventsJSON from "../../../events.json";



const EventsPost = () => {
  const dbArray = EventsJSON.db;

  function getGoogleMapsURL(coords) {
    return `https://www.google.com/maps/search/?api=1&query=${coords[0]},${coords[1]}`;
}

  return (
    <>
      {dbArray.map((item, index) => (
   
        <View key={index} style={styles.postContainer} >

        <View onTouchEnd={() => Linking.openURL(getGoogleMapsURL(item.coordenadas))}>
          <Image
            source={{ uri: item.img }}
            style={{ width: "100%", height: 200, borderRadius: 20 }}
          />
    
    </View>
          <Text style={styles.titleText}>{item.titulo}</Text>
          <Text syle = {styles.subtitleText}>{item.fecha}, {item.hora}</Text>

        </View>
 
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginLeft: 15, 
    marginRight: 15, 
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 14,
    marginTop: 5,
  },
  footerText: {
    fontSize: 12,
    marginTop: 5,
    color: "grey",
  },
});

export default EventsPost;
