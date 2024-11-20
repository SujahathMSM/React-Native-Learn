import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Sujahath</Text>
      <Text>Software Engineer (Ai)</Text>
      <Pressable>
        <Text style={styles.buttonDesign}>Hello</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop:0,
    width: 200,
    height: 300,
    borderWidth: 2,
    borderColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonDesign: {
    color: 'teal'
  }
});
