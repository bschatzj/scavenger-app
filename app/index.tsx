import React from "react";
import { View, TextField, Text, Button, Colors } from "react-native-ui-lib";
import { ColorObject } from "../colors";
import { Link } from "expo-router";

Colors.loadColors(ColorObject);

export default function App() {
  return (
    <View flex>
      <Text color={Colors.error}>HI!</Text>
      <Link href="/gamepage" asChild>
        <Button>Game List</Button>
      </Link>
    </View>
  );
}
