import React from 'react'; 
import { StyleSheet, Text, View, Image, Button, TextInput} from "react-native";

const Buyer = () => { 
    return ( 
        <>
            <Text style={styles.title}>Cliente</Text>
            
        </> 
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