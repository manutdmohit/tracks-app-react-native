import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>Track List</Text>
      <Button
        title="Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
