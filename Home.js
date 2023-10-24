import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput} from "react-native";

function Home() {
    const [valueLogin, onChangeTextLogin] = React.useState('Insert Login');
    const [valuePassword, onChangeTextPassword] = React.useState('Insert Password')

    const navigation = useNavigation(); 
  
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={{ uri: "https://your-logo-url.com/logo.png" }}
          />
          <Text style={styles.title}>BazApp</Text>
          <Text style={styles.subtitle}>Your One-Stop Bazaar Hub</Text>
        </View>
  
        <View style={styles.content}>
          <Text style={styles.description}>
            Discover endless bazaar items from multiple vendors all in one place.
  
          </Text>
  
          <Text> Login </Text> 
          <Text> Username </Text>
          <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeTextLogin(text)}
          value={valueLogin}
          style={{padding: 10}}
        />
  
        <Text> Password </Text> 
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeTextPassword(text)}
          value={valuePassword}
          style={{padding: 10}}
        />
        <Button
        title="Get Started"
        onPress={() => navigation.navigate('Main')}
      />
        </View>



  
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
      backgroundColor: "#ba7f36",
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
  });
  
  export default Home; 