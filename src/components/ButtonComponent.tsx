import { View, Button, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      <View style={styles.button}>
        <Button
          title="Learn More"
          color="teal"
          onPress={() => alert("You Pessed Me")}
        />
      </View>

      <Text style={{ marginTop: 20, textAlign: "center" }}>
        Using Pressable Below
      </Text>

      <Pressable onPress={() => console.log("Pressed Me")}>
        <Text style={{ color: "teal", textAlign: "center" }}>Press Me</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
  },
});
