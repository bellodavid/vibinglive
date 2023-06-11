import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { pallets } from '../../constant'
import SongList from '../../components/SongList/SongList'
import AlbumHeader from '../../components/AlbumHeader/AlbumHeader'
import { Icon } from '@rneui/themed'
import { useNavigation, useRoute } from '@react-navigation/native'
import AlbumButtons from '../../components/AlbumHeader/AlbumButtons'
import albumDetails from '../../data/albumDetails'
import albumCategories from '../../data/albumCategories'

const AlbumScreen = () => {
  const route = useRoute();
  console.log(route)
  const [ album, setAlbum ] = useState(null)
  const [ data, setData ] = useState()

  const API_URL = 'https://good-puce-nematode-cuff.cyclic.app/api/v1/albums'

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setData(json);
    } catch (err) {
      console.log(err)
    }

  
  };
 
  

  useEffect(()=> {
    fetchData()

    // if (Array.isArray(albumCategories.albums)) {
    //   const album = albumCategories.albums.find(album => album.id === albumId);
    //   setAlbum(album);
    //   console.log(albumId)
    // } else {
    //   console.log("albumDetails is not an array or is not defined.");
    // }
   
   }, [])

  const navigation = useNavigation()
  return (
    <ScrollView style={{backgroundColor: pallets.background,
   }}>
      
      <View style={styles.container}>
      
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Icon type="antdesign" name="left" color="white" onPress={navigation.goBack}/>
          <Icon type="antdesign" name="search1" color="white"/>
        </View>
        
      {/* <AlbumHeader/> */}
     
      <FlatList 
      data={albumCategories[0].albums[0].songs}
      renderItem={({item}) => <SongList song={item}/>}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <AlbumHeader album={albumCategories[0].albums[0]}/>}/>
      
     
      </View>
      </ScrollView>
  )
}

export default AlbumScreen

const styles = StyleSheet.create({
container: {
  marginTop: 40,
  backgroundColor: pallets.background,
  marginLeft: 20,
   marginRight: 20,
}
})