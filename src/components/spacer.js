import React from "react";
import { View, StyleSheet } from "react-native";

const Spacrer = ({ children }) => {
  return <View style={Style.spacer}>{children}</View>;
};

const Style = StyleSheet.create({
  spacer: {
    margin: 20,
  },
});

export default Spacrer;
