import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Signin to Your Account"
        errorMessage=""
        onSubmit={() => {}}
        submitButtonText="Signin"
      />
      <NavLink
        text="Don't have an account? Signup instead"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    marginTop: 80,
  },
});
