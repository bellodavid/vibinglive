import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";
import { pallets } from "../../constant";

const SlideBar = () => {
  return (
    <View>
      <Slider
        style={{ width: "100%", height: 40, marginTop: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#F5F5F5"
        thumbTintColor="#FFFFFF"
      />
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-between",
          marginTop: -10
        }}
      >
        <Text style={styles.seekTime}>0:01</Text>
        <Text style={styles.seekTime}>0:01</Text>
      </View>
    </View>
  );
};

export default SlideBar;

const styles = StyleSheet.create({
  seekTime: {
    color: "white",
    fontSize: 10,
  },
});
