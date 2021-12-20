import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const NavLink = ({ navigation, routeName, text }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ routeName })}>
      <Text style={styles.link}>{text}</Text>
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
