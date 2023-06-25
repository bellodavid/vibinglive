import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useContext } from "react";
import { pallets } from "../../constant";
import HeaderSearch from "../../components/Header/HeaderSearch";
import SearchCard from "../../components/Search/SearchCard";
import { AppContext } from "../../AppContext";
import { FlatList } from "react-native-gesture-handler";
import { songs } from "../../data/songs";
let ScreenHeight = Dimensions.get("window").height;

const SearchScreen = () => {
  const { savedTrack } = useContext(AppContext);
  console.log(savedTrack);
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <HeaderSearch />
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: pallets.backgroundSecondary,
    height: ScreenHeight,
    paddingRight: 10,
  },
});
