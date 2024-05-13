import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import LocIcon from '../../svgs/location.svg';
import {useTheme} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.15,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: width * 0.05,
    padding: width * 0.03,
    backgroundColor: 'white',
    // shadowColor: 'gray',
    // elevation: 12,
  },
  img: {
    borderRadius: 12,
  },
  textContainer: {
    maxWidth: width * 0.6,
    // backgroundColor: 'red',
    gap: height * 0.01,
  },
});
export default function SearchEventCard({image, date, title, location = ''}) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: useTheme().colors.cardColor},
      ]}>
      <Image style={styles.img} source={image} />
      <View style={styles.textContainer}>
        <HeadingOne text={date} fontSize={width * 0.033} color={'#5669FF'} />
        <HeadingOne
          text={title}
          fontSize={width * 0.05}
          color={useTheme().colors.themeTextColor}
        />
        {location === '' ? null : (
          <View
            style={{
              flexDirection: 'row',
              gap: width * 0.01,
              alignItems: 'center',
            }}>
            <LocIcon />
            <HeadingOne
              text={location}
              fontSize={width * 0.033}
              color={'gray'}
            />
          </View>
        )}
      </View>
    </View>
  );
}
