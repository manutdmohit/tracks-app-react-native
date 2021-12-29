import React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find((t) => t._id === _id);

  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text style={{ fontSize: 30 }}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline
          coordinates={track.locations.map((loc) => loc.coords)}
          strokeWidth={1}
          lineDashPattern={[0]}
        />
      </MapView>
    </>
  );
};

TrackDetailScreen.navigationOptions = {
  title: 'Track Detail',
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
