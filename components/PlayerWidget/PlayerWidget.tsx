import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Touchable,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Icon, Image } from "@rneui/themed";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { pallets } from "../../constant";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { onPlay } from "../SongList/SongList";
import { AppContext } from "../../AppContext";
import { useNavigation } from "@react-navigation/native";
import { BottomModal, ModalContent } from "react-native-modals";
import PlayerCard from "../player/PlayerCard";
import SlideBar from "../player/Slider";
import CurrentSong from "../player/CurrentSong";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const albumDefaultImage =
  "https://media.istockphoto.com/id/1199639660/vector/music-notes-neon-icon.jpg?s=612x612&w=0&k=20&c=-pC3Rrvn6sm2TSkIh2rw5Q7fjtXz6RgGXWDiStXpBoM=";
export type songListProp = {
  song: Song;
};

const PlayerWidget = ({ songHandle }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [totalDuration, setTotalDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>();
  const { songId, songUri, songImg, songArtist, setProgress } =
    useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);

  const onPlayBackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setTotalDuration(status.durationMillis);

    setPosition(status.positionMillis);

    // if (status.didJustFinish === true) {
    //   setCurrentSound(null);
    //   playNextTrack();
    // }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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
    if (sound === null || totalDuration === null || position === null) {
      return 0;
    }

    return (position / totalDuration) * 100;
  };

  return (
    <View
      style={{
        position: "absolute",
        bottom: -17,
        height: screenHeight * 0.1,
        flex: 1,
      }}
    >
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={styles.container}>
          <Image
            style={{
              height: 35,
              width: 35,
              marginRight: 1,
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
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{ color: "white", fontSize: 12 }}>{songId}</Text>
                <Text style={{ color: "white", fontSize: 9, marginTop: 1 }}>
                  {songArtist}
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity>
                <FontAwesome
                  onPress={onPlayPausePress}
                  name={isPlaying ? "pause" : "play"}
                  size={18}
                  color="white"
                  style={{ marginTop: 7 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  type="entypo"
                  name="controller-next"
                  size={20}
                  color="white"
                  style={{ marginTop: 5 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <BottomModal
          visible={modalVisible}
          onHardwareBackPress={() => setModalVisible(false)}
          swipeDirection={["up", "down"]}
          wipeThreshold={200}
        >
          <ModalContent
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: pallets.backgroundDarker,
            }}
          >
            <View style={{ height: "90%", width: "100%" }}>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <AntDesign
                    onPress={() => setModalVisible(!modalVisible)}
                    name="down"
                    size={24}
                    color="white"
                  />
                </Pressable>
                <Pressable>
                  <Entypo name="dots-three-vertical" size={24} color="white" />
                </Pressable>
              </View>
              <PlayerCard songImage={songImg} />

              <CurrentSong title={songId} artist={songArtist} />
              <SlideBar
                onPress={onPlayPausePress}
                icon={isPlaying ? "pause" : "play"}
                currentTime={formatTime(position)}
                totalTime={formatTime(totalDuration)}
                progress={getProgress() / 100}
              />
            </View>
          </ModalContent>
        </BottomModal>
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
