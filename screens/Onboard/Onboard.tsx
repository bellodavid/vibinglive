import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import WelcomCard from '../../components/welcome/WelcomCard';

const Onboard = () => {
  const image1 = require('../../assets/images/onboard/onboard1.png');
  const image2 = require('../../assets/images/onboard/onboard2.png');
  const image3 = require('../../assets/images/onboard/onboard3.png');
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSwipe = (event) => {
    setCurrentSlide(event.nativeEvent.position);
  };

  const handleSwipeEnd = () => {
    if (currentSlide === 2) {
      navigation.navigate('SignUp');
    }
  };

  return (
    <PagerView
      style={styles.container}
      initialPage={0}
      onPageSelected={handleSwipe}
      onPageScrollStateChanged={handleSwipeEnd}
    >
      <View key="1">
        <WelcomCard
          imgUrl={image1}
          value="1 of 3"
          title="Welcome to"
          spantitle="VibingLive"
          description="We are the second to the most popular place to listen to music in the world"
        />
      </View>
      <View key="2">
        <WelcomCard
          imgUrl={image2}
          value="2 of 3"
          title="Enjoy your music"
          description="Manage your playlist of dope Dj mixs, Audio books and best of Gospel musics to your liking"
        />
      </View>
      <View key="3">
        <WelcomCard
          imgUrl={image3}
          value="3 of 3"
          title="Unlimited Downloads"
          description="Manage your playlist of dope Dj mixs, Audio books and best of Gospel musics to your liking"
        />
      </View>
    </PagerView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
