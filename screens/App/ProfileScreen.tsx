import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { pallets } from "../../constant";
import { Icon } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30, marginLeft: 10, marginRight: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="chevron-small-left" size={24} color="white" />
          <Text style={[styles.text, { paddingLeft: 10, marginTop: 2 }]}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: pallets.background,
    height: "100%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
