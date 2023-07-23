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
import LibaryCard from "../../components/Library/LibaryCard";
let ScreenHeight = Dimensions.get("window").height;
const LibraryScreen = () => {
  const { savedTrack, setSavedTrack } = useContext(AppContext);
  console.log(JSON.stringify(savedTrack, null, 2));
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
        <Text style={{ color: "white", marginTop: 30, marginBottom: 10 }}>
          Top Mixes
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <LibaryCard
            title="Ileya party groove"
            description="All fun"
            imageUri="https://i0.wp.com/www.val9ja.com/wp-content/uploads/2020/07/DJ-OP-Dot-Ileya-Party-Groove-Mix-artwork-1.jpeg?resize=150%2C150&ssl=1?crop=130px%2C0px%2C2309px%2C1731px&resize=300,226"
          />
          <LibaryCard
            title="Ileya party groove"
            description="All fun"
            imageUri="https://i0.wp.com/www.val9ja.com/wp-content/uploads/2020/07/DJ-OP-Dot-Ileya-Party-Groove-Mix-artwork-1.jpeg?resize=150%2C150&ssl=1?crop=130px%2C0px%2C2309px%2C1731px&resize=300,226"
          />
          <LibaryCard
            title="Ileya party groove"
            description="All fun"
            imageUri="https://i0.wp.com/www.val9ja.com/wp-content/uploads/2020/07/DJ-OP-Dot-Ileya-Party-Groove-Mix-artwork-1.jpeg?resize=150%2C150&ssl=1?crop=130px%2C0px%2C2309px%2C1731px&resize=300,226"
          />
        </View>
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
