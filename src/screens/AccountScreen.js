import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            display: 'flex',
            fontSize: 30,
            textAlign: 'center',
          }}
        >
          Account Screen
        </Text>
        <Spacer>
          <Button title="Signout" onPress={signout} />
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};

export default AccountScreen;

const styles = StyleSheet.create({});
