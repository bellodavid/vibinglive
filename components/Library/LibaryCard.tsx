import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

interface cardProps {
  imageUri: string;
  title: string;
  description: string;
}

const LibaryCard = ({
  imageUri,
  title,
  description,
}: cardProps): JSX.Element | null => {
  return (
    <View>
      <Image source={{ uri: imageUri }} style={styles.container} />
      <Text style={[styles.text, { fontWeight: "bold", marginTop: 5, fontSize: 12}]}>{title}</Text>
      <Text style={[styles.text, {fontSize: 11}]}>{description}</Text>
    </View>
  );
};

export default LibaryCard;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    backgroundColor: "grey",
  },
  text: {
    color: "white",
  },
});
