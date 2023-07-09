import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useContext } from "react";
import { pallets } from "../../constant";
import LibraryButton from "../../components/Library/LibraryButton";
import HeaderSearch from "../../components/Header/HeaderSearch";
import { AntDesign } from "@expo/vector-icons";

import { FlatList } from "react-native-gesture-handler";
import albumCategories from "../../data/albumCategories";
import AlbumCard from "../../components/Category/AlbumCard";
import { AppContext } from "../../AppContext";
let ScreenHeight = Dimensions.get("window").height;
const LibraryScreen = () => {
  const { savedTrack, setSavedTrack } = useContext(AppContext);
  return (
    <ScrollView style={styles.container}>
      <HeaderSearch />
      <View style={{ marginLeft: 10 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "80%",
          }}
        >
          <LibraryButton color="#D67E58" icon="download" label="Downlaods" />
          <LibraryButton color="#2CD1CC" icon="music" label="Favourite songs" />
          <LibraryButton color="white" icon="plus" />
          <LibraryButton color="#C3AEEC" icon="activity" label="My playlist" />
          <LibraryButton color="white" icon="folder" label="Favourite Album" />
        </View>
        <Text style={{ color: "white", marginTop: 30 }}>Top Mixes</Text>
      </View>
    </ScrollView>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: pallets.backgroundSecondary,
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
});
