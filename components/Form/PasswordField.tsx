import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Icon, Input } from "@rneui/themed";
import { pallets } from "../../constant";
import { Feather } from "@expo/vector-icons";

interface InputFieldProps {
  label: string;
  phone: string;
  placeholder: string;
  leftIcon: string;
  rightIcon: string;
  iconRight: string;
  handler: string;
  instruction: string;
  secure: boolean;
  setHandler: (text: string) => void;
  visibility: (text: string) => void;
}

const PasswordField = ({
  label,
  instruction,
  secure,
  iconRight,
  handler,
  setHandler,
  phone,
  visibility,
  leftIcon,
  rightIcon,
  placeholder,
}: InputFieldProps) => {
  return (
    <View>
      {/* <Text style={styles.label}>Full Name</Text> */}
      <Input
        inputStyle={{ color: "white", paddingLeft: 10, fontSize: 14 }}
        inputContainerStyle={{
          borderWidth: 0,
          borderBottomWidth: 0,
          paddingLeft: 10,
          paddingRight: 10,
          padding: 5,
          backgroundColor: pallets.input,
          borderColor: "white",
          borderRadius: 10,
          height: 50
        }}
        containerStyle={{ margin: 0 }}
        placeholder={placeholder}
        leftIcon={{
          type: "antdesign",
          name: `${leftIcon}`,
          color: pallets.darkGrey,
          size: 18,
        }}
        rightIcon={
          <Feather
            name={rightIcon}
            size={14}
            color={pallets.darkGrey}
            onPress={visibility}
          />
        }
        onChangeText={setHandler}
        label={label}
        labelStyle={{ color: pallets.grey, paddingBottom: 10, fontWeight: 400, fontSize: 14 }}
        secureTextEntry={secure}
      />
      <Text style={styles.container}>{instruction}</Text>
    </View>
  );
};

export default PasswordField;

const styles = StyleSheet.create({
  viewcontainer: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    color: pallets.white,
    marginLeft: 15,
    marginTop: -20,
    fontSize: 10,
  },
});
