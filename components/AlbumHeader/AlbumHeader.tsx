import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Image } from "@rneui/themed";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import AlbumButtons from "./AlbumButtons";
import albumDetails from "../../data/albumDetails";
import { AppContext } from "../../AppContext";

const AlbumHeader = (props) => {
  const songLength = albumDetails.length;
  const { album } = props;
  const { albumImage } = useContext(AppContext);
  return (
    <View>
      <View style={{ alignItems: "center",}}>
        <Image
          style={{ height: 250, width: 250, borderRadius: 10 }}
          source={{ uri: albumImage }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
          {album.name}
        </Text>
        <Text style={{ color: "white", marginTop: 4 }}>
          Album . {album.by}{" "}
        </Text>
        <Text style={{ color: "white", marginTop: 4 }}>
          {songLength} songs. 1hr 20mins
        </Text>
        <View
          style={{
            marginTop: 8,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "30%",
          }}
        >
          <MaterialIcons
            name="library-music"
            style={{ marginTop: 6 }}
            size={25}
            color="white"
          />
          <Ionicons name="ios-download-outline" size={30} color="white" />
          <Entypo
            name="dots-three-vertical"
            style={{ marginTop: 6 }}
            size={25}
            color="white"
          />
        </View>
      </View>
      <AlbumButtons />
    </View>
  );
};

export default AlbumHeader;
