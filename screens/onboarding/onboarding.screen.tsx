import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function OnboardingScreen() {
  const handleGetStarted = () => {
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/onboarding/onboarding.png")}
        style={styles.BackgroundImage}
        resizeMode="cover"
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.7)"]}
        style={styles.overlay}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Bem-vindo à eShop</Text>
        <Text style={styles.subtitle}>onde descobrir é tão fácil quanto comprar!</Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <LinearGradient
            colors={["#000000", "#434343"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Começar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BackgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.6,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 30,
    textAlign: "center",
    opacity: 0.8,
  },
  button: {
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonGradient: {
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
