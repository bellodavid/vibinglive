import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import Slider from "@react-native-community/slider";
import { pallets } from "../../constant";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AppContext } from "../../AppContext";
const SlideBar = ({playAction, icon, currentTime, totalTime, progress}) => {
  
 
  return (
    <View>
      <Slider
        style={{ width: "100%", height: 40, marginTop: 50 }}
        value={progress}
        
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="gray"
        thumbTintColor="#FFFFFF"
      />
      <View
        style={{
          marginRight: 20,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 1,
        }}
      >
        <Text style={styles.seekTime}>{currentTime}</Text>
        <Text style={styles.seekTime}>{totalTime}</Text>
      </View>

      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          
        }}
      >
        <Ionicons style={{top: 5}}  name="ios-shuffle-outline" size={20} color="white" />
        <MaterialCommunityIcons name="skip-previous" size={32} color="white" />
        <FontAwesome5 onPress={playAction} name={icon} size={32} color="white" />
        <MaterialCommunityIcons name="skip-next" size={32} color="white" />
        <Feather style={{top: 7}} name="repeat" size={15} color="white" />
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
