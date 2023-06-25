import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { pallets } from "../../constant";
import { Icon } from "@rneui/themed";
import Home from "../../assets/icons/Home";
import HomeScreen from "../../screens/App/HomeScreen";
import SearchScreen from "../../screens/App/SearchScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import LibraryScreen from "../../screens/App/LibraryScreen";
import AlbumScreen from "../../screens/App/AlbumScreen";
import RootNavigator from "../RootNavigator";
export type TabStackParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
};

const TabNavigator = ({ navigation }: { navigation: any }) => {
  const Tab = createBottomTabNavigator<TabStackParamList>();
  const naviation = useNavigation();

  useLayoutEffect(() => {
    naviation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: pallets.primary,
        tabBarInactiveTintColor: pallets.grey,
        tabBarStyle: {
          backgroundColor: pallets.backgroundDarker,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          position: "absolute",
          height: 55,
          borderTopWidth: 0,
          paddingBottom: 8,
          paddingTop: 10,
        },

        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Icon
                type="antdesign"
                name="home"
                size={20}
                color={focused ? pallets.primary : "gray"}
              />
            );
          } else if (route.name === "Search") {
            return (
              <Icon
                type="antdesign"
                name="search1"
                size={20}
                color={focused ? pallets.primary : "gray"}
              />
            );
          } else if (route.name === "My Library") {
            return (
              <Ionicons
                name="albums"
                size={20}
                color={focused ? pallets.primary : "gray"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="My Library"
        component={LibraryScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
