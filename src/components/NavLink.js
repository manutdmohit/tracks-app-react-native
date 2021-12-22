import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';

const NavLink = ({ navigation, routeName, text }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ routeName })}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    fontSize: 18,
    // textAlign: 'center',
    textAlign: 'center',
  },
});

export default withNavigation(NavLink);
