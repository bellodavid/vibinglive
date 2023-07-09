import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Card, Image } from "@rneui/themed";
import Logo from "./Logo";
import { Album } from "../../types";
import { useNavigation } from "@react-navigation/native";
import albumDetails from "../../data/albumDetails";
import { AppContext } from "../../AppContext";

type AlbumCardProps = {
  playTitle: string;
  player: string;
  imageUri: string;
  artistsHeadline: string;
  album: Album; // Assuming Album is the correct type for album
};

const AlbumCard = ({ album }: AlbumCardProps) => {
  const navigation = useNavigation();
  const { setAlbumImage } = useContext(AppContext);
  const handleClick = () => {
    navigation.navigate("albumScreen", { albumImageUri: album.imageUri });
    setAlbumImage(album.imageUri);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View
        style={{
          display: "flex",
          marginLeft: 0,
          marginRight: 20,
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <View style={styles.container}>
          <Image
            containerStyle={{
              width: 155,
              height: 155,
            }}
            source={{ uri: album.imageUri }}
          />
        </View>
        <Logo />
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {album.player}
          </Text>
          <Text style={{ color: "white", fontSize: 12 }}>
            {album.artistsHeadline}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    padding: 0,
    margin: 0,
    width: 149,
    height: 140,
  },
});
