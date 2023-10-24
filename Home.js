import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput} from "react-native";
import Logo from "./assets/logo.png"
function Home() {
    const [valueLogin, onChangeTextLogin] = React.useState('Insert Login');
    const [valuePassword, onChangeTextPassword] = React.useState('Insert Password')

    const navigation = useNavigation(); 
  
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={Logo}
          />
          <Text style={styles.title}>BazApp</Text>
          <Text style={styles.subtitle}>Tu Bazaar a un dedo de distancia.</Text>
        </View>
        

        <View style={styles.content}>
          <Text style={styles.description}>
            Descubre multiples items de bazaar de varios vendedores todo en un solo lugar.
  
          </Text>
  

          <Text style = {styles.title_main}> Login </Text> 
          <Text style = {styles.title_login}> Username </Text>
          <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeTextLogin(text)}
          value={valueLogin}
          style={styles.textView}
          placeholder="Insert Account Username"
          placeholderTextColor="#202020"
          returnKeyType='go'
          secureTextEntry
          autoCorrect={false}
        />
  
        <Text style = {styles.title_login}> Password </Text> 
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeTextPassword(text)}
          value={valuePassword}
          style={styles.textView}
          placeholder="Insert Account Password"
          placeholderTextColor="#202020"
          returnKeyType='go'
          secureTextEntry
          autoCorrect={false}
        />
        </View> 
        <Button
        title="Vista del Cliente"
        onPress={() => navigation.navigate('Buyer')}
      />

      <Button
      title = "Vista del Vendedor"
      onPress = {() => navigation.navigate('Seller')}
      /> 
      
        </View>
  
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    header: {
      paddingTop: 60,
      paddingBottom: 20,
      backgroundColor: "#00192A",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: 100,
      height: 100,
    },
    title: {
      fontSize: 32,
      color: "#fff",
      fontWeight: "bold",
      marginTop: 10,
    },
    subtitle: {
      fontSize: 16,
      color: "#ffffff",
      marginTop: 5,
      fontStyle:"italic", 
    },
    content: {
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    description: {
      fontSize: 18,
      textAlign: "center",
      marginBottom: 20,
    },
    textView: { 
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 1, 
      borderBottomWidth: 1,
      borderRadius: 10,
      padding: 10, 
      marginBottom: 15,
      width: 200,  // Fixed width
    },
    title_login: { 
      fontSize: 15,
      color: "#000",
      marginBottom: 15,
      marginTop: 15, 
      fontWeight: "bold", 
    },
    title_main: { 
      fontSize: 24,
      color: "#000",
      fontWeight: "bold",
      marginTop: 10,
    },
    containerBased: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    input: {
      width: 200,  // Fixed width
      height: 200, 
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
    },
  
  });


  export default Home; 