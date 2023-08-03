import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "../navigation/RootNavigator";
import PlayerWidget from "../components/PlayerWidget/PlayerWidget";
import { AppContext } from "../AppContext";
import { ModalPortal } from "react-native-modals";
import { auth } from "../firebase/config";
import PlayerScreen from "../screens/App/PlayerScreen";

const LoadApp = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user?.emailVerified) {
        console.log("not verified");
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
  const [savedTrack, setSavedTrack] = useState(null);
  const [songArtist, setSongArtist] = useState<string>(null);
  const [albumImage, setAlbumImage] = useState<string>(null);
  const [progress, setProgress] = useState<string>(null);
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
          savedTrack,
          setSavedTrack: (savedTrack: []) => setSavedTrack(savedTrack),
          progress,
          setProgress: (progress: string) => setProgress(progress),
          albumImage,
          setAlbumImage: (albumImage: string) => setAlbumImage(albumImage),
        }}
      >
        <NavigationContainer>
          <SafeAreaProvider>
          <RootNavigator />
          </SafeAreaProvider>
          <ModalPortal />
        </NavigationContainer>
      </AppContext.Provider>
    </>
  );
};

export default LoadApp;
