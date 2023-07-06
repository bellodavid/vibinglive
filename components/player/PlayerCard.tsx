import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { pallets } from "../../constant";
import { ScreenHeight, ScreenWidth } from "@rneui/base";
import { AppContext } from "../../AppContext";

const PlayerCard = ({ songImage }) => {
  const playerDefaultImage =
    "https://media.istockphoto.com/id/1199639660/vector/music-notes-neon-icon.jpg?s=612x612&w=0&k=20&c=-pC3Rrvn6sm2TSkIh2rw5Q7fjtXz6RgGXWDiStXpBoM=";
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.imageCard}
        source={{ uri: songImage || playerDefaultImage }}
      />
    </ScrollView>
  );
};

export default PlayerCard;

const styles = StyleSheet.create({
  container: {
    top: 90,
  },

  imageCard: {
    width: 280,
    height: 280,
    borderRadius: 10,
    alignSelf: "center",
  },
});
