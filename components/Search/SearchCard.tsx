import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";
import { Card, Image } from "@rneui/themed";
import Logo from "../Category/Logo";
import { useNavigation } from "@react-navigation/native";


const SearchCard = ({ card }) => {
  const navigation = useNavigation()
  const handleCard = () => {
    navigation.navigate('AlbumScreen')
  }
  return (
    <Pressable>
    <View style={{ marginLeft: 20, marginBottom: 20, marginTop: 20 }}>
      <Card containerStyle={styles.cardStyle}>
        <Image
          style={{
            width: 170,
            height: 100,
            borderRadius: 10,
          }}
          source={{ uri: card.imgUri}}
        />
      </Card>
      <Logo />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.description}>{card.title}</Text>
    </View>
    </Pressable>
    
  );
};
export  default SearchCard;

const styles = StyleSheet.create({
  cardStyle: {
    width: 170,
    height: 100,
    margin: 0,
    padding: 0,
    borderRadius: 10,
    borderWidth: 0,
  },
  description: {
    color: "white",
    paddingTop: 5,
    fontSize: 11,

    width: "90%",
    flexWrap: "wrap"
  },
});
