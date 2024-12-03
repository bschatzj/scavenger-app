import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View } from "react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ header: () => null }}>
      <Tabs.Screen options={{ headerShown: false }} name="index" />
      <Tabs.Screen options={{ headerShown: false }} name="two" />
      <Tabs.Screen options={{ headerShown: false }} name="home" />
    </Tabs>
  );
}
