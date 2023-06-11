import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Card, Image } from '@rneui/themed'
import Logo from '../Category/Logo'



const SearchCard = () => {
  return (
    <View style={{marginLeft: 20, marginBottom: 20, marginTop: 20}}>
      <Card containerStyle={styles.cardStyle}>
        <Image style={{
          width: 170,
          height: 100,
          borderRadius: 10,
        }} source={{uri: 'https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}}/>
      </Card>
      <Logo/>
      <Text style={styles.description}>Made for you</Text>
    </View>
  )
}

const CardList = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{
      display: "flex", justifyContent: "space-evenly", flexDirection: "row"}}>
      <SearchCard/>
      <SearchCard/>
      </View>
      <View style={{display: "flex", justifyContent: "space-evenly", flexDirection: "row"}}>
      <SearchCard/>
      <SearchCard/>
      </View>
      <View style={{display: "flex", justifyContent: "space-evenly", flexDirection: "row"}}>
      <SearchCard/>
      <SearchCard/>
      </View>
      <View style={{display: "flex", justifyContent: "space-evenly", flexDirection: "row"}}>
      <SearchCard/>
      <SearchCard/>
      </View>
      <View style={{display: "flex", justifyContent: "space-evenly", flexDirection: "row"}}>
      <SearchCard/>
      <SearchCard/>
      </View>
      </ScrollView>
      )
}


export default CardList

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
  color: 'white',
  paddingTop: 5,

}
})