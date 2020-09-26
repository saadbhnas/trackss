import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Map from "../components/Map";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import "../screens/_mockLocation";

const TrackCreateScreen = () => {
  const [Err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          console.log(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  console.log(Err);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create Track Screen</Text>
      <Map />
      {Err ? <Text>please enable location permission</Text> : null}
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({});

export default TrackCreateScreen;
