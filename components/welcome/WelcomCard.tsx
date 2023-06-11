import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const screenHeight = Dimensions.get("window").height/2;
interface Props{
  value: string;
  description: string;
  title: string;
  spantitle: string;
  imgUrl: string;
}

const WelcomCard = ({value, title, imgUrl, description, spantitle}: Props): JSX.Element | null => {
 
  return (
    <View>
       <Image style={styles.image} source={`${imgUrl}`}/>
      <View style={styles.modal}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>{value}</Text>
      </View>

      <View style={styles.textContainer}>
      <Text style={[styles.text, {fontSize: 25, fontWeight: 400}]}>{title} 
       <Text style={{color: '#FF3D00' }}> {spantitle}</Text></Text>
      </View>

      <View style={[styles.textContainer, { marginTop: 20 }]}>
      <Text style={{fontSize: 18, color: '#FFFDFD', fontWeight: 100, lineHeight: 30}}>
        {description}</Text>
      </View>
      
      <View style={{display: 'flex', flexDirection: "row",
        marginLeft: 20, marginTop: 25}}>
      <View
            style={[
              styles.indicator,
              { backgroundColor: value === '1 of 3' ? '#FF3D00' : '#FFFDFD' },
            ]}
          />
           <View
            style={[
              styles.indicator,
              { backgroundColor: value === '2 of 3' ? '#FF3D00' : '#FFFDFD' },
            ]}
          />
           <View
            style={[
              styles.indicator,
              { backgroundColor: value === '3 of 3' ? '#FF3D00' : '#FFFDFD' },
            ]}
          />
      </View>
      
      </View>
    </View>
  )
}

export default WelcomCard;

const styles = StyleSheet.create({
  textContainer:{
    marginTop: 30,
    marginLeft: 20,
    marginRight: 25,
  },
  modal:{
    marginTop: "90%",
    position: "absolute",
    height: "100%",
    borderRadius: 50,
    width: "100%",
    backgroundColor: "#0B121A",
    border: 0,
  },
 image:{
    width: '100%',
    height: "85%",
    resizeMode: 'cover',
 },
 text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
 },

 indicator: {
  width: 10,
  height: 10,
  borderRadius: 5,
  margin: 5,
},
});