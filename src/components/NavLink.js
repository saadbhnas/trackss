import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacrer from "./spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacrer>
        <Text style={Styles.link}>{text}</Text>
      </Spacrer>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(NavLink);
