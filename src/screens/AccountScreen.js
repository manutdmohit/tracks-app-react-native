import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>Account Screen</Text>
      <Spacer>
        <Button title="Signout" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
