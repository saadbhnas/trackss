import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 50 }}> Track list screen </Text>
      <Button
        title="go to track detail screen"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const Styles = StyleSheet.create({});

export default TrackListScreen;
