import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];

  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 28.53848 + i * 0.01,
        longitude: 81.11612 + i * 0.01,
      });
    } else {
      points.push({
        latitude: 28.53848 - i * 0.01,
        longitude: 81.11612,
      });
    }
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 28.53848,
        longitude: 81.11612,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} lineDashPattern={[0]} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
