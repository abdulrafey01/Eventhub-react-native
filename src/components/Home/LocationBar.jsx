import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MenuIcon from '../../abstracts/MenuIcon';
import LocationBox from '../../abstracts/LocationBox';
import BellIcon from '../../abstracts/BellIcon';

export default function LocationBar({OnClick}) {
  return (
    <View style={styles.container}>
      <MenuIcon OnClick={OnClick} />
      <LocationBox />
      <BellIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 327,
    // backgroundColor: 'white',
  },
});
