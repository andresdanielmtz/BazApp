import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import Checkbox from 'expo-checkbox';
import AddProductButton from '../../buttons/AddProductButton';
import ImageButton from '../../buttons/ImageButton';

const AddSellerGet = () => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [used, setUsed] = useState(false);
    const [bazar, setBazar] = useState('');
    const [footer, setFooter] = useState('');
    const [image, setImage] = useState(null);

    const handleImageUpload = (url) => {
      setImage(url);
    };

    return (
        <ScrollView style={styles.container}>
          <Text style={styles.label}>Producto:</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Text style={styles.label}>Talla:</Text>
          <TextInput
            style={styles.input}
            value={subtitle}
            onChangeText={text => setSubtitle(text)}
          />
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>Usado   </Text>
            <Checkbox
              value={used}
              onValueChange={() => setUsed(!used)}
              color="#00192A"
            />
          </View>
          <Text style={styles.label}>Bazar:</Text>
          <TextInput
            style={styles.input}
            value={bazar}
            onChangeText={text => setBazar(text)}
          />
          <Text style={styles.label}>Precio (MXN):</Text>
          <TextInput
            style={styles.input}
            value={footer}
            onChangeText={text => setFooter(text)}
            keyboardType="numeric"
          />
          <ImageButton onImageUpload={handleImageUpload}/>
          <AddProductButton title={title} subtitle={subtitle} used={used} bazar={bazar} img={image} footer={footer} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
    },
    label: {
        fontSize: 16,
        color: "#00192A",
        marginBottom: 4,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
});

export default AddSellerGet;
