import { View, Text, StyleSheet, Dimensions, Touchable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Icon, Image } from "@rneui/themed";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { pallets } from "../../constant";
import { Audio } from "expo-av";
import { onPlay } from "../SongList/SongList";
import { AppContext } from "../../AppContext";

const screenHeight = Dimensions.get("window").height / 2;
const screenWidth = Dimensions.get("window").width;
const albumDefaultImage =
  "https://media.istockphoto.com/id/1199639660/vector/music-notes-neon-icon.jpg?s=612x612&w=0&k=20&c=-pC3Rrvn6sm2TSkIh2rw5Q7fjtXz6RgGXWDiStXpBoM=";
export type songListProp = {
  song: Song;
};

const PlayerWidget = ({ songHandle }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>();
  const { songId, songUri, songImg, songArtist } = useContext(AppContext);

  const onPlayBackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: songUri },
      { shouldPlay: isPlaying },
      onPlayBackStatusUpdate
    );

    setSound(newSound);
  };

  useEffect(() => {
    playCurrentSong();
  }, [songUri]);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }
    return (position / duration) * 100;
  };

  return (
    <View style={{ position: "absolute", bottom: 40 }}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={styles.container}>
          <Image
            style={{
              height: 35,
              width: 35,
              marginRight: 10,
              marginTop: 14,
              borderWidth: 1,
              borderColor: "white",
            }}
            source={{ uri: songImg || albumDefaultImage }}
          />
          <View
            style={{
              marginTop: 14,
              marginLeft: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              width: 300,
            }}
          >
            <View>
              <Text
                style={{ color: "white", fontSize: 12, fontWeight: "bold" }}
              >
                {songId}
              </Text>
              <Text style={{ color: "white", fontSize: 11, marginTop: 1 }}>
                {songArtist}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity>
                <FontAwesome
                  onPress={onPlayPausePress}
                  name={isPlaying ? "pause" : "play"}
                  size={25}
                  color="white"
                  style={{ marginTop: 7 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  type="entypo"
                  name="controller-next"
                  size={30}
                  color="white"
                  style={{ marginTop: 5 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <CardDivider />
    </View>
  );
};

export default PlayerWidget;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: pallets.backgroundDarker,
    flexDirection: "row",
    paddingLeft: 20,
  },
  progress: {
    height: 5,
    backgroundColor: pallets.primary,
    borderRadius: 10,
  },
});
