import { View, Text, Touchable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { pallets } from "../../constant";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const AlbumButtons = () => {
  const handleNavigation = () => {
    const navigation = useNavigation();
    navigation.navigate("Player");
  };

  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 30,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: pallets.primary,
          padding: 15,
          height: 60,
          width: 170,
          flexDirection: "row",
          borderRadius: 5,
          justifyContent: "center",
        }}
      >
        <Ionicons name="logo-google-playstore" color="white" size={30} />
        <Text
          style={{
            marginLeft: 10,
            alignSelf: "center",
            color: "white",
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Play All
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: pallets.primary,
          padding: 10,
          height: 60,
          width: 180,
          flexDirection: "row",
          borderRadius: 5,
          justifyContent: "center",
        }}
        onPress={handleNavigation}
      >
        <Ionicons name="shuffle" color="white" size={35} />
        <Text
          style={{
            marginLeft: 10,
            alignSelf: "center",
            color: "white",
            fontSize: 20,
            fontWeight: "300",
          }}
        >
          Shuffle
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumButtons;
