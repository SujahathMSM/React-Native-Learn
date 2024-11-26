import { StyleSheet } from "react-native";

const st = StyleSheet.create({
  container: {
    width: "80%",
    margin: 5,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    // Box shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Elevation for Android
    elevation: 8,
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
});

export default st;
