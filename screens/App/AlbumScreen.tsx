import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { pallets } from "../../constant";
import SongList from "../../components/SongList/SongList";
import AlbumHeader from "../../components/AlbumHeader/AlbumHeader";
import { Icon } from "@rneui/themed";

import { useNavigation, useRoute } from "@react-navigation/native";
import AlbumButtons from "../../components/AlbumHeader/AlbumButtons";
import albumDetails from "../../data/albumDetails";
import albumCategories from "../../data/albumCategories";
import PlayerWidget from "../../components/PlayerWidget/PlayerWidget";

const AlbumScreen = () => {
  const route = useRoute();
  // console.log(route);
  const [album, setAlbum] = useState(null);
  const [savedTracks, setSavedTracks] = useState();

  const image = route.params.albumImageUri;

  const API_URL = "https://good-puce-nematode-cuff.cyclic.app/api/v1/songs";

  const getSavedTracks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setSavedTracks(data.data.doc);
      console.log(JSON.stringify(savedTracks, null, 2));
    } catch (err) {
      console.log(err);
    }
  };

 

  useEffect(() => {
    getSavedTracks();
  }, []);
  const playTrack = async () => {
    if (savedTracks.length > 0) {
      setCurrentTrack(savedTracks[0]);
    }
    await play(savedTracks[0]);
  };
  const navigation = useNavigation();
  return (
    <View style={{height: "100%"}}>
    <ScrollView style={{ backgroundColor: pallets.background, paddingLeft: 10, paddingRight: 10 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
          <Icon
            type="antdesign"
            name="left"
            color="white"
            size={20}
            onPress={navigation.goBack}
          />
          <Icon type="antdesign" size={20} name="search1" color="white" />
        </View>

 

       
      </View>
      <FlatList
          data={savedTracks}
          renderItem={({ item }) => <SongList song={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <AlbumHeader album={albumCategories[0].albums} />
          )}
        />
    </ScrollView>
    <PlayerWidget />
    </View>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    marginBottom: 50,
    height: "100%",
    backgroundColor: pallets.background,
    marginLeft: 20,
    marginRight: 20,
  },
});
