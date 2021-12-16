import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text>Signup</Text>
      <Button title="Signin" onPress={() => navigation.navigate('signin')} />
      <Button
        title="main flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
