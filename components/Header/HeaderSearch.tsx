import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Icon, Input } from "@rneui/themed";
import { pallets } from "../../constant";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface HeaderSearchProp {
  onChange?: () => void;
}

const HeaderSearch = ({ onChange }: HeaderSearchProp) => {
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Icon
        containerStyle={{ paddingTop: 10, paddingLeft: 10 }}
        type="antdesign"
        name="left"
        size={18}
        color="white"
      />
      {active ? (
        <Input
          placeholder="Search"
          leftIcon={
            <Icon type="antdesign" name="search1" size={15} color="white" />
          }
          inputStyle={{ color: "white", paddingLeft: 10, fontSize: 13 }}
          inputContainerStyle={styles.search}
          containerStyle={{ width: 290, height: 40, marginTop: 4 }}
          onChangeText={onChange}
        />
      ) : null}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 10,
          paddingRight: 10,
        }}
      >
        <Pressable onPress={handleClick}>
          <Icon
            style={{ top: 1 }}
            type="antdesign"
            name="search1"
            size={20}
            color="white"
          />
        </Pressable>
        <Pressable>
        <EvilIcons
          style={{ paddingLeft: 10 }}
          name="user"
          size={25}
          color="white"
        />
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  search: {
    backgroundColor: pallets.backgroundDarker,
    borderBottomWidth: 0,
    paddingLeft: 10,
    fontSize: 10,
    height: 35,
  },
});
