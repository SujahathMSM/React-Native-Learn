import { View, Text, StyleSheet } from "react-native";
import Greet from "../components/Greet";
import ButtonComponent from "../components/ButtonComponent";
import DisplayImage from "../components/DisplayImage";
import Profile from "../components/Profile";

const Index = () => {
  return (
    <View style={styles.container}>
      <Greet />
      <ButtonComponent />
      <DisplayImage />
      <View style={styles.centeredWrapper}>
        <Profile />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredWrapper: {
    flex: 1, // Takes up remaining space
    justifyContent: "center", // Centers vertically within its space
    alignItems: "center", // Centers horizontally
  },
});
