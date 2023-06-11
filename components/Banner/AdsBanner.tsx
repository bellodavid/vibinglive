import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Card, Image } from '@rneui/themed'
import { pallets } from '../../constant'

const AdsBanner = () => {
  return (
    <View>
      <Image containerStyle={{
        width: "100%",
        height: 132,
        borderRadius: 20,
        marginTop: 20
      }}
      source = {{uri: 'https://c0.wallpaperflare.com/preview/415/916/987/concert-light-crowd-yellow.jpg'}}/>
      <View style={styles.banner}>
        <Text style={{
          color: "white",
          fontWeight: "bold",
        }}>Party Mix</Text>
      </View>
    </View>
  )
}

export default AdsBanner

const styles = StyleSheet.create({
banner:{
  width: 100,
  backgroundColor: pallets.primary,
  opacity: 0.5,
  borderBottomLeftRadius: 20,
  borderTopRightRadius: 20,
  position: "absolute",
  marginTop: 135,
  paddingLeft: 20,
  


 
}
})