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

const PlayerCard = () => {
  const { albumImage } = useContext(AppContext);
  const playerDefaultImage =
    "https://media.istockphoto.com/id/1199639660/vector/music-notes-neon-icon.jpg?s=612x612&w=0&k=20&c=-pC3Rrvn6sm2TSkIh2rw5Q7fjtXz6RgGXWDiStXpBoM=";
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.imageCard}
        source={{ uri: albumImage || playerDefaultImage }}
      />
    </ScrollView>
  );
};

export default PlayerCard;

const styles = StyleSheet.create({
  container: {
   
  },

  imageCard: {
    width: 300,
    height: 300,
    borderRadius: 10,
    alignSelf: "center",
  },
});
