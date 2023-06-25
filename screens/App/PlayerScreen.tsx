import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { pallets } from "../../constant";
import { ScreenHeight } from "@rneui/base";
import AlbumHeader from "../../components/AlbumHeader/AlbumHeader";
import PlayerCard from "../../components/player/PlayerCard";
import CurrentSong from "../../components/player/CurrentSong";
import SliderBar from "../../components/player/Slider";
import { AppContext } from "../../AppContext";
const PlayerScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <PlayerCard />
        <CurrentSong />
        <SliderBar />
      </View>
    </ScrollView>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: pallets.backgroundDarker,
    height: ScreenHeight,
  },
  innerContainer: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
});
