import { View, Text, ScrollView, Pressable, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { pallets } from '../../constant'
import { DATA } from '../../data/CategoryBotton'


const NavBotton = () => {
  const [active, setActive] = useState(false)

  const handlePress = () => {
    setActive(!active)
  }
  return (
    <ScrollView contentContainerStyle={{
      marginTop: 20}} >
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data= {DATA}
      contentContainerStyle={{display:"flex",
      width: "100%", justifyContent: "space-around"}}
      renderItem = {({item}) => <TouchableOpacity style={{marginHorizontal: 20}} onPress={handlePress}  style={[styles.container, {backgroundColor: active? pallets.primary : "transparent"}]}>
      <Text style={{color: "white",
     fontSize: 15, fontWeight: "bold"}}>{item.title}</Text>
  </TouchableOpacity>} 
  
      keyExtractor={item => item.id}/>
     
   
    </ScrollView>
  )
}

export default NavBotton
const styles = StyleSheet.create({
container: {
  
  borderColor: pallets.primary,
  borderWidth: 1,
  borderRadius: 20,
  padding: 5,
  paddingLeft: 10,
  paddingRight: 10,
  alignItems: "center"


}
})