import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Greet = () => {
  return (
    <View>
      <Text style={styles.main}>Greetings from Sujahath Siddeek 👋</Text>
    </View>
  )
}

export default Greet

const styles = StyleSheet.create({
    main: {
        color:"white",
        fontSize: 20,
        borderRadius: 15,
        borderColor: "#0d0d0d",
        borderWidth: 2,
        padding: 10,
        borderStyle: "solid",
        textAlign: "center",
        marginTop: 40,
        margin: 20,
        backgroundColor:'rgba(12, 78, 107, 0.5)'
    }
})