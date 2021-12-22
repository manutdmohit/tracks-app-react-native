import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <Text>Account Screen</Text>
      <Spacer>
        <Button title="Signout" onPress={signout} />
      </Spacer>
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
