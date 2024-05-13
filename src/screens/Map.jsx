import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Callout, Circle, Marker} from 'react-native-maps';

export default function Map() {
  const [pin, setPin] = useState({
    latitude: 31.4220558,
    longitude: 73.0923253,
  });

  return (
    <View style={{flex: 1}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 31.4220558,
          longitude: 73.0923253,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={pin}
          // pinColor="green"
          draggable={true}
          onDragStart={e => {
            console.log('Drag Start', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}>
          <Callout>
            <Text> I am here</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000}></Circle>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
