import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <View style={styles.btn}>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 18,
    color: 'red',
    marginLeft: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  btn: {
    marginHorizontal: 10,
  },
});

export default AuthForm;
