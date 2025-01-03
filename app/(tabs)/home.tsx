import React from "react";
import HomePage from "@/pages/home";
import { View, Text } from "react-native";

const Home = () => {
  console.log("here!!!");
  return (
    <View className="bg-red-800 flex-1">
      <HomePage />
    </View>
  );
};

export default Home;
