import React from 'react'; 
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import BuyerPost from '../../view/Buyer/BuyerPost'; 
import AddContentButton from '../../buttons/AddContentButton';

const AddSeller = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <AddContentButton navigation={navigation} />
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
    }
});

export default AddSeller; 