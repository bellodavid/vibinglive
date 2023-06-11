import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { pallets } from '../../constant'
import HeaderSearch from '../../components/Header/HeaderSearch';
import SearchCard from '../../components/Search/SearchCard';

let ScreenHeight = Dimensions.get("window").height;
const SearchScreen = () => {
  return (
    <ScrollView style={styles.container}>
    <View style={{marginTop: 40}}>
    <HeaderSearch/>
    <SearchCard/>
    </View>
  </ScrollView>
  )
}

export default SearchScreen
const styles = StyleSheet.create({
  container:{
    backgroundColor: pallets.backgroundSecondary,
    height: ScreenHeight, 
    paddingRight: 10,

  }
  })