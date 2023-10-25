import React from 'react'; 
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, Pressable} from "react-native";
import { Entypo } from '@expo/vector-icons';
import BuyerPost from '../../view/Buyer/BuyerPost'; 

const AddSeller = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.floatingButton}>
                <Entypo name="plus" size={32} color="#fff" />
            </Pressable>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title}>Agregar Productos</Text>
                </View>
                <BuyerPost />
            </ScrollView>
        </View>
    );
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
    },
    floatingButton: {
        zIndex: 1,
        backgroundColor: '#00192A',
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        bottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default AddSeller; 