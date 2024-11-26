import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const handlePress = () => {
    console.log("Pressed Hello Button");
  };

  const Multiply = (a: number, b: number) => a * b;
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          source={require("../assets/SEGuy.jpg")}
          style={styles.imageStyle}
        />
      </SafeAreaView>
      <Text style={styles.heading}>Sujahath</Text>
      <Text style={styles.text}>Software Engineer (Ai)</Text>
      <Pressable onPress={handlePress} style={styles.buttonDesign}>
        <Text style={styles.buttontext}>Hire Me</Text>
      </Pressable>
      {/* <Text>2 * 2 = {Multiply(2, 2)}</Text> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    width: 350,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 8,
    shadowRadius: 3.75,
    elevation: 4,
  },

  buttonDesign: {
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "#eeefe5ec",
    cursor: "pointer",
    elevation: 5,
  },

  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  text: {
    fontSize: 15,
    fontWeight: "400",
  },

  buttontext: {
    fontWeight: "500",
  },
});
