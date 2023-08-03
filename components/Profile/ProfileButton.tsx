import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { pallets } from "../../constant";
import { useNavigation } from "@react-navigation/native";

interface ProfileButton {
  category: string;
  title?: string;
}

const ProfileButton = ({
  category,
  title,
}: ProfileButton): JSX.Element | null => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ paddingLeft: 10, paddingRight: 10, height: "100%" }}>
      <Text style={{ color: pallets.red, marginTop: 30, marginBottom: 10 }}>
        {category}
      </Text>

      {title?.map((item, index) => (
        <View style={styles.container}>
          <Text key={index} style={{ color: "white", fontSize: 12 }}>
            {item}
          </Text>
          <AntDesign
            onPress={navigation.goBack}
            name="right"
            size={14}
            color="white"
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    marginTop: 1,
    justifyContent: "space-between",
  },
});
