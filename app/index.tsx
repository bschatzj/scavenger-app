import React from "react";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import { useColorScheme } from "@/lib/useColorScheme";
import { Button } from "@/components/buttons";
const Home = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  return (
    <View className="bg-emerald-800 h-screen w-screen">
      <Text className="text-lg">HI!</Text>
      <Button
        variant="secondary"
        onPress={() => {
          colorScheme.toggleColorScheme();
        }}
      >
        <Text>HI!</Text>
      </Button>
    </View>
  );
};

export default Home;
