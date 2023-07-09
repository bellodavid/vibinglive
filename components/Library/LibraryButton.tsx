import { View, Text, StyleSheet } from "react-native";
import React, { ComponentClass } from "react";
import { Feather } from "@expo/vector-icons";
import { pallets } from "../../constant";

interface LibraryButton {
  icon?: string;
  label?: string;
  color?: string;
}
const LibraryButton = ({ icon, label, color }: LibraryButton) => {
  return (
    <View style={{ marginTop: 10, marginLeft: 10 }}>
      <View style={{ width: 90 }}>
        <View style={styles.container}>
          <Feather
            style={{ alignSelf: "center", marginTop: 20 }}
            name={icon}
            size={25}
            color={color}
          />
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            paddingTop: 3,
            alignSelf: "center",
          }}
        >
          {label}
        </Text>
      </View>
    </View>
  );
};

export default LibraryButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 70,
    width: 70,
    borderRadius: 15,
    marginLeft: 10,
    backgroundColor: pallets.backgroundDarker,
  },
});
