import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Onboard from "../screens/Onboard/Onboard";
import SignUp from "../screens/Auth/SignUp/SignUp";
import RootNavigator from "../navigation/RootNavigator";
import PlayerWidget from "../components/PlayerWidget/PlayerWidget";
import { AppContext } from "../AppContext";
import { auth } from "../firebase/config";

const LoadApp = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedin(true);
      } else {
        setIsLoggedin(false);
      }
    });
    return unsubscribe;
  });
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [songId, setSongId] = useState<string>(null);
  const [songUri, setSongUri] = useState<string>(null);
  const [songImg, setSongImg] = useState<string>(null);
  const [songArtist, setSongArtist] = useState<string>(null);
  return (
    <>
      <AppContext.Provider
        value={{
          songId,
          setSongId: (id: string) => setSongId(id),
          songUri,
          setSongUri: (uri: string) => setSongUri(uri),
          songImg,
          setSongImg: (img: string) => setSongImg(img),
          songArtist,
          setSongArtist: (artist: string) => setSongArtist(artist),
        }}
      >
        <NavigationContainer>
          <SafeAreaProvider>
            <RootNavigator />
            {isLoggedin ? <PlayerWidget /> : null}
          </SafeAreaProvider>
        </NavigationContainer>
      </AppContext.Provider>
    </>
  );
};

export default LoadApp;
