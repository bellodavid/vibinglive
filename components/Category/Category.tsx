import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import AlbumCard from './AlbumCard'
import { pallets } from '../../constant'

type CategoryProps = {
  title: string;
  albums: [Album];
}
const Category = ({title, albums}: CategoryProps) => {
  return (
    <View  style={{marginTop: 15}}>
      <View style={{display: "flex", flexDirection:"row", width: "100%", justifyContent: "space-between"}}>
        <Text style={{color: pallets.white, fontSize: 18, marginTop: 10}}>{title}</Text>
        <Text style={{color: pallets.primary, marginTop: 14}}>See All</Text>
      </View>
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
     <FlatList
     data={albums}
     renderItem={({item}) => <AlbumCard album={item}/>}
     keyExtractor={item => item.id}
     showsHorizontalScrollIndicator={false}
     horizontal />
     
     
      </ScrollView>
      </View>
  
  )
}

export default Category
const styles = StyleSheet.create({
container: {
 flex: 1,
}
})