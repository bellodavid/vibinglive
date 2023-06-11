import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Image } from '@rneui/themed'
import Logo from './Logo'
import { Album } from '../../types'
import { useNavigation } from '@react-navigation/native'
import albumDetails from '../../data/albumDetails'

type AlbumCardProps = {
  playTitle: string;
  player: string;
  imageUri: string;
  artistsHeadline: string;
}

const AlbumCard = (props : AlbumCardProps) => {
  const navigation = useNavigation();
  
  const handleClick = () => {
    navigation.navigate("albumScreen", {album: props.album})
  }
  return (
   <TouchableOpacity onPress ={handleClick}>
    <View style={{display:"flex", marginLeft: 0, marginRight: 20, flexDirection: "column", justifyContent: "space-between", marginTop: 8}}>
      <View style={styles.container}>
        <Image containerStyle={{
          width: 155,
          height: 155,
        }} source={{uri: props.album.imageUri}}/>
      </View>
      <Logo/>
     <View style={{marginTop: 20}}>
      <Text style={{color: "white", fontWeight: "bold"}}>{props.album.player}</Text>
      <Text style={{color: "white", fontSize: 12}}>{props.album.artistsHeadline}</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default AlbumCard;
const styles = StyleSheet.create({
container: {
  borderWidth: 0,
  padding: 0,
  margin: 0,
  width: 149,
  height: 140
}
})