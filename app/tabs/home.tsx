import Home from "@/pages/home";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function TabTwoScreen() {
  return (
    <View>
      <Home />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
