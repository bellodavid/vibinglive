import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { pallets } from "../../constant";
import { Icon } from "@rneui/themed";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigation.navigate("Login");
      console.log(error.message);
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome back!</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 65,
        }}
      >
        <Icon
          style={{ marginTop: 1 }}
          type="antdesign"
          name="bells"
          size={20}
          color="white"
        />
        <EvilIcons
          onPress={handleSignout}
          name="user"
          size={28}
          color="white"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: pallets.white,
    fontSize: 16,
  },
});
