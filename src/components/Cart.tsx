import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Cart = () => {
  const price: string = "200,000";
  const carImage: string = "../assets/Car11.jpg";
  const carName: string = "BMW";
  const rating: string = "2.5";
  const description: string =
    "Here a random description for my car, with modern AI technologies integrated";
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        elevation: 5
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold" }}>Price: $ {price}</Text>
      </View>
      <View>
        <Image
          source={require(carImage)}
          style={{
            height: 200,
            width: 200,
            marginTop: 10,
            padding: 5,
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 5,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", gap: 100, marginTop: 20 }}>
        <Text style={{ fontWeight: "800" }}>{carName}</Text>
        <Text>Rating: {rating}</Text>
      </View>
      <View>
        <Text style={{ width: 200, marginTop: 5, color: "#545454" }}>
          {description}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          borderWidth: 2,
          borderColor: "#020202",
          width: 150,
          marginHorizontal: 25,
          paddingVertical: 5,
          borderRadius: 5,
          backgroundColor: "#000",
        }}
      >
        <TouchableOpacity>
          <Text style={{ textAlign: "center", color: "#fff" }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
