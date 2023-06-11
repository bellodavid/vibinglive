import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Card, Image } from '@rneui/themed'
import { pallets } from '../../constant'

type detailProp = {
    imgUrl: string
    title: string
}
const CardProp = ({ imgUrl, title }: detailProp) => {
    return(
        <Card containerStyle={{
            width:170,
            borderRadius: 10,
            height: 75,
            backgroundColor: pallets.background,
            borderWidth: 0,
            padding: 0,
            margin: 0,
            marginHorizontal: 10,
            marginLeft: 0,

        }}>
      <View style={styles.container}>
        <Image source={{uri: `${imgUrl}`}}
        containerStyle={{
            width: 80,
            height: 75
        }}/>
        <Text style={{color: "white", alignSelf: "center", paddingLeft: 10}}>{title}</Text>
      </View>
      </Card>
    )
}
const DetailCard = () => {
  return (
    <ScrollView style={{marginTop: 20, padding: 0}} showsHorizontalScrollIndicator={false} horizontal={true}>
       <CardProp title="DJ Mixes"
       imgUrl='https://www.optoproductions.com/wp-content/uploads/2020/03/10-Tips-To-Craft-The-Best-DJ-Mix-451x300.jpg'/>
       <CardProp title = "Audiobook" imgUrl="https://nationaltoday.com/wp-content/uploads/2021/06/Audiobook-.jpg" />
       <CardProp title ="Pop mix" imgUrl="https://positiveroutines.com/wp-content/uploads/2018/03/black-woman-playing-guitar.jpg"/>
    </ScrollView>
  )
}

export default DetailCard;
const styles = StyleSheet.create({
container:{
    display: "flex",
    flexDirection: "row",
    margin: 0,
},

})
