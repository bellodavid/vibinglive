import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Touchable,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { Icon, Image } from "@rneui/themed";
import albumDetails from "../../data/albumDetails";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
import Entypo from "@expo/vector-icons/Entypo";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
const screenHeight = Dimensions.get("window").height / 5;
import { AppContext } from "../../AppContext";
import PlayerWidget from "../PlayerWidget/PlayerWidget";

export type songListProp = {
  song: Song;
};

const SongList = (props) => {
  const { song } = props;
  const [uri, setUri] = useState();

  const { setSongId, setSongUri, setSongImg, setSongArtist } =
    useContext(AppContext);

  const onPlay = () => {
    setSongId(song.title);
    setSongUri(song.playUri);
    setSongImg(song.imgUri);
    setSongArtist(song.artist);
  };

  return (
    <View>
      <Pressable onPress={onPlay}>
        <>
          <View style={{ flexDirection: "row", marginRight: 20, width: "80%" }}>
            <Image
              style={{
                height: 40,
                width: 40,
                marginRight: 10,
                borderWidth: 1,
                borderColor: "white",
              }}
              source={{ uri: song.imgUri }}
            />
            <View style={styles.container}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {song.title}
              </Text>
              <Text style={{ color: "white", fontSize: 12, marginTop: 5 }}>
                {song.artist}
              </Text>
            </View>
            <Entypo
              style={{ paddingRight: 0, marginTop: 10 }}
              name="dots-three-vertical"
              color="white"
              size={20}
            />
          </View>
          <CardDivider />
        </>
      </Pressable>
    </View>
  );
};

export default SongList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "transparent",
    flexDirection: "column",
  },
});
