import { router } from "expo-router";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={style.container}>
      <Text>Welcome to the scavenge.</Text>
      <Button title="HI!" onPress={() => router.push("/tabs/")} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
