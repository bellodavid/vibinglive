import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import { pallets } from "../../constant";
import HeaderSearch from "../../components/Header/HeaderSearch";
import SearchCard from "../../components/Search/SearchCard";
import { AppContext } from "../../AppContext";
import { songs } from "../../data/songs";
let ScreenHeight = Dimensions.get("window").height;

const SearchScreen = () => {
  const [songs, setSongs] = React.useState();
  const [searchQuery, setSearchQuery] = React.useState();
  const API_URL = "https://good-puce-nematode-cuff.cyclic.app/api/v1/songs";
  const getSavedSongs = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setSongs(data.data.doc.filter((_, index) => index !== 4));
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getSavedSongs();
    handleSearch()
  }, [searchQuery]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    const filteredPost = songs.filter(
      post =>
        post.title.toLowerCase().includes(query.toLowerCase()) 
    );
    if (query.trim() === '') {
      setSearchQuery('');
      setSongs(songs);
     
    } else {
      setSongs(filteredPost);
    }
  
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <HeaderSearch onChange={handleSearch}/>
        {/* {songs?.map((s, i) =>  ( <SearchCard card={s} key={i}/>))} */}
        <FlatList
          data={songs}
          renderItem={({ item }) => <SearchCard card={item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
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
