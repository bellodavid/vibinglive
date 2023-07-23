import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { pallets } from "../../constant";
import { Icon } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import { BackgroundImage } from "@rneui/base";
import ProfileButton from "../../components/Profile/ProfileButton";
import { FlatList } from "react-native-gesture-handler";
import { ProfileMenu } from "../../data/UserProfile";

const PROFILE_IMAGE =
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";
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
        <View style={{ flexDirection: "row" }}>
          <Image
            style={[styles.profileImage, { marginTop: 40, marginLeft: 10 }]}
            source={{
              uri: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
            }}
          />
          <View style={{ marginTop: 50, paddingLeft: 20 }}>
            <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
              Johnson
            </Text>
            <Text style={{ color: pallets.red, fontSize: 12, marginTop: 2 }}>
              View profile
            </Text>
          </View>
        </View>
        {ProfileMenu.map((item, index) => (
          <ProfileButton
          key={index}
            category={item.category}
            
            title={item.list}
          />
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: pallets.background,
    height: "100%",
    width: "100%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "white",
  },
});
