import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Map from 'react-native-maps';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
  },
});
export default function MapView() {
  return (
    <View style={styles.screen}>
      <Map
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
