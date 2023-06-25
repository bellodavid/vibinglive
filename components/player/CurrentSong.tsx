import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Icon } from "@rneui/themed";
import { Fontisto } from "@expo/vector-icons";

const CurrentSong = ({ title, artist }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ color: "white", fontSize: 15, marginBottom: 5 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 13, color: "white" }}>{artist}</Text>
      </View>
      <View>
        <Fontisto
          onPress={handleLike}
          name={isLiked ? "heart-alt" : "heart"}
          size={20}
          color="white"
        />
      </View>
    </View>
  );
};

export default CurrentSong;
