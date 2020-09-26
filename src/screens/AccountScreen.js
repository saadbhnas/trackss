import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-elements";
import Spacrer from "../components/spacer";
import { Context as AuthContext } from "../Context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 50 }}> Account Screen </Text>
      <Spacrer>
        <Button title="signout" onPress={signout} />
      </Spacrer>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({});

export default AccountScreen;
