import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import LocIcon from '../../svgs/location.svg';

const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 112,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: 'gray',
    elevation: 12,
  },
  img: {
    borderRadius: 12,
  },
  textContainer: {
    maxWidth: 200,
    gap: 5,
  },
});
export default function SearchEventCard({image, date, title, location = ''}) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <View style={styles.textContainer}>
        <HeadingOne text={date} fontSize={12} color={'#5669FF'} />
        <HeadingOne text={title} fontSize={18} color={'black'} />
        {location === '' ? null : (
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <LocIcon />
            <HeadingOne text={location} fontSize={12} color={'gray'} />
          </View>
        )}
      </View>
    </View>
  );
}
