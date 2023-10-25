import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from "../firebaseConfig";
import React, { useState } from 'react';
import * as FileSystem from 'expo-file-system';

function ImageButton({ onImageUpload }) {

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setUploading(true);

      try {
        const uri = image;
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = () => {
              resolve(xhr.response);
          };
          xhr.onerror = (e) => {
              reject(new TypeError('Network request failed'));
          };
          xhr.responseType = 'blob';
          xhr.open('GET', uri, true);
          xhr.send(null);
        });

        const filename = image.substring(image.lastIndexOf('/') + 1);
        const ref = firebase.storage().ref().child(filename);
        await ref.put(blob);
        setUploading(false);
        Alert.alert('Photo Uploaded!');
        setImage(null);

        const url = await ref.getDownloadURL();
        console.warn(url);
        onImageUpload(url);
      } catch (error) {
          console.error(error);
          setUploading(false);
      }
    }
  };

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={pickImage}
      >
        <Text style={styles.buttonText}>Subir Imagen</Text>
      </TouchableOpacity>

    </>
  );

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#aaaa',  // Change this to your desired color
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

  
export default ImageButton;