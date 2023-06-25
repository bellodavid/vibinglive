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
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 30,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: pallets.primary,
          padding: 15,
          height: 50,
          width: 140,
          flexDirection: "row",
          borderRadius: 5,
          justifyContent: "center",
        }}
      >
        <Ionicons name="logo-google-playstore" color="white" size={20} />
        <Text
          style={{
            marginLeft: 10,
            alignSelf: "center",
            color: "white",
            fontSize: 17,
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
          height: 50,
          width: 140,
          flexDirection: "row",
          borderRadius: 5,
          justifyContent: "center",
        }}
        onPress={handleNavigation}
      >
        <Ionicons
          style={{ paddingTop: 2 }}
          name="shuffle"
          color="white"
          size={22}
        />
        <Text
          style={{
            marginLeft: 10,
            alignSelf: "center",
            color: "white",
            fontSize: 17,
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
