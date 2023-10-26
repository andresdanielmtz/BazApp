import React from 'react'; 
import { StyleSheet, Text, View, ScrollView} from "react-native";
import SellerDelete from '../../view/Seller/SellerDelete'; 

const DeleteSeller = () => { 
    return ( 
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                        <Text style={styles.title}>Eliminar Productos</Text>
                </View>
                <SellerDelete/>
            </View>   
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',

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