import Home from "@/pages/home";
import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

const Landing = () => {
  return (
    <SafeAreaView style={style.container}>
      <Home />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Landing;
