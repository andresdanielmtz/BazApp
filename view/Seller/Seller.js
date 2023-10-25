import React from 'react'; 
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import SellerButton from "../../buttons/sellerButton";

const Seller = () => { 

    const navigation = useNavigation();
    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <ScrollView>
                    <Text style={styles.title}>Menú</Text>
                </ScrollView> 
            </View>
            <SellerButton navigation={navigation} />
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

export default Seller; 