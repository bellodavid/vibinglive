import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Icon } from "@rneui/themed";
import { Fontisto } from "@expo/vector-icons";

const CurrentSong = () => {
  const { songId, songArtist } = useContext(AppContext);
  const [isLiked, setIsLiked] = React.useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      <View>
        <Text style={{ color: "white", fontSize: 17, marginBottom: 5 }}>
          Everything look great
        </Text>
        <Text style={{ fontSize: 13, color: "white" }}>Patty</Text>
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
