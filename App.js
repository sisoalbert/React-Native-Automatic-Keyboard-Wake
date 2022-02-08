import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const HomeScreen = () => {
  const inputRef = React.useRef();

  setTimeout(() => inputRef.current.focus(), 100);
  return (
    <View style={{ paddingVertical: 20 }}>
      <Text>circle</Text>
      <TextInput ref={inputRef} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
