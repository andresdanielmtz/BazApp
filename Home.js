import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import Logo from "./assets/logo.png";
import HomeButton from "./buttons/homeButton";

function Home() {
  const [valueLogin, onChangeTextLogin] = React.useState("");
  const [valuePassword, onChangeTextPassword] = React.useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.title}>BazApp</Text>
        <Text style={styles.subtitle}>Tu bazar a un dedo de distancia.</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          Descubre una gran variedad de artículos de bazar de diversos
          vendedores, todos en un mismo lugar.
        </Text>

        <Text style={styles.title_main}> Iniciar Sesión </Text>
        <Text style={styles.title_login}> Usuario </Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={(text) => onChangeTextLogin(text)}
          value={valueLogin}
          style={styles.textView}
          placeholder="Ingresar Usuario"
          placeholderTextColor="#878787"
          returnKeyType="go"
    
          autoCorrect={false}
        />

        <Text style={styles.title_login}> Contraseña </Text>
        <TextInput
          editable
          multiline={false} // Set to false for password input
          numberOfLines={1} // Set to 1 for password input
          maxLength={40}
          onChangeText={(text) => onChangeTextPassword(text)}
          value={valuePassword}
          style={styles.textView}
          placeholder="Ingresar Contraseña"
          placeholderTextColor="#878787"
          returnKeyType="go"
          secureTextEntry={true} // This prop makes it a password-style input
          autoCorrect={false}
        />
      </View>

      <HomeButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00192A",

  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#00192A",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
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
    fontStyle: "italic",
  },
  content: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 15,
    color: "#fff",
  },
  textView: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: 200, // Fixed width
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#000",
  },
  title_login: {
    fontSize: 15,
    color: "#fff",
    marginBottom: 15,
    marginTop: 15,
    fontWeight: "bold",

  },
  title_main: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
  },
  containerBased: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: 200, // Fixed width
    height: 200,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    color: "#fff",
  },
});

export default Home;
