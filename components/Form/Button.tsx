import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { pallets } from "../../constant";
import { useNavigation } from "@react-navigation/native";

interface buttonProps {
  action: string;
  CreateAccount: undefined;
  call: string;
  description: string;
  pressIn: () => void;
  onPress: () => void;
}

const Button = ({
  action,
  onPress,
  call,
  description,
  pressIn,
}: buttonProps) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginLeft: 10, marginRight: 10 }}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{action}</Text>
      </TouchableOpacity>
      <>
        <TouchableOpacity onPress={pressIn}>
          <Text
            style={{
              color: pallets.white,
              alignSelf: "center",
              paddingTop: 15,
              fontSize: 12,
            }}
          >
            {description}
            <Text style={{ color: pallets.primary, fontSize: 12 }}>
              {" "}
              {call}{" "}
            </Text>
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    width: "100%",
    backgroundColor: pallets.primary,
    borderRadius: 10,
    paddingTop: 17,
    height: 50,
  },
  text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
    height: 50,
  },
});
