import React from 'react'; 
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView} from "react-native";
import BuyerPost from './BuyerPost';  // Adjust the import path to match the location of BuyerPost.js

const Buyer = () => { 
    return ( 
        <ScrollView>
            <Text style={styles.title}>Catálogo</Text>
            <BuyerPost/> 
            
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
});



export default Buyer; 