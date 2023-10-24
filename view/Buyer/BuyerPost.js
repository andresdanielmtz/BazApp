import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput} from "react-native";
import BuyerJSON from "../../custom_prototype.json"; 


const BuyerPost = () => {
    return ( 
        <>
            {Object.keys(BuyerJSON).map(key => (
                <View key={key} style={styles.postContainer}>
                    <Text style={styles.titleText}>{BuyerJSON[key].title}</Text>
                    <Text style={styles.subtitleText}>{BuyerJSON[key].subtitle}, 
                    { BuyerJSON[key].used ? <Text> Usado</Text> : <Text> Nuevo</Text>}</Text>



                    <Text style={styles.footerText}>{BuyerJSON[key].footer}</Text>
                </View>
            ))}
        </>

    )
}; 

const styles = StyleSheet.create({
    postContainer: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
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