import { View, Text, StyleSheet, ScrollView } from "react-native";
import Greet from "../components/Greet";
import ButtonComponent from "../components/ButtonComponent";
import DisplayImage from "../components/DisplayImage";
import Profile from "../components/Profile";
import Cart from "../components/Cart";
import st from "../utils/Styles";
import ListItem from "../components/ListItem";
const Index = () => {
  return (
    <View style={styles.container}>
      {/* <Greet />
      <ButtonComponent />
      <DisplayImage /> */}
      {/* <View style={styles.centeredWrapper}> */}
      <ScrollView>
        <View style={styles.centeredWrapper}>
          <ListItem />
        </View>
      </ScrollView>

      {/* </View> */}
      {/* <View style={st.container}>
        <Text style={st.text}>Sujahath</Text>
      </View>
      <View style={st.container}>
        <Text style={st.text}>Software Engineer</Text>
      </View>
      <View style={st.container}>
        <Text style={st.text}>University of Moratuwa</Text>
      </View>
      <View style={styles.centeredWrapper}>
        <Cart/>
      </View> */}

      {/* <ListItem/> */}
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
