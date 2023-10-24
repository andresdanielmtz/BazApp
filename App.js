import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { styled } from "nativewind";
import React from "react";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
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
          BazApp centralizes your shopping experience, making it easier than
          ever to find what you're looking for.
        </Text>
        <Button
          title="Get Started"
          onPress={() => alert("Navigate to Sign Up/Sign In")}
        />
      </View>

      <StatusBar style="auto" />
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
    backgroundColor: "#6200EA",
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
    color: "#BB86FC",
    marginTop: 5,
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
