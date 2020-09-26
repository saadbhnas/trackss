import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacrer from "./spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacrer>
        <Text h3>{headerText}</Text>
      </Spacrer>
      <Input
        label="emil"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={Styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Button
        title={submitButtonText}
        onPress={() => onSubmit({ email, password })}
      />
    </>
  );
};

const Styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginBottom: 15,
    marginLeft: 10,
  },
});

export default AuthForm;
