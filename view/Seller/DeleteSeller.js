import React from 'react'; 
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView} from "react-native";
import BuyerPost from '../../view/Buyer/BuyerPost'; 

const DeleteSeller = () => { 

    return ( 
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                        <Text style={styles.title}>Eliminar Productos</Text>
                </View>
                <BuyerPost/>
            </View>   
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",

    },
    title: {
        color: "#fff", 
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    header: {
        height: 80,
        paddingVertical: 24,
        backgroundColor: '#00192A',
        alignContent: 'center',
        justifyContent: 'center',
    }
});

export default DeleteSeller; 