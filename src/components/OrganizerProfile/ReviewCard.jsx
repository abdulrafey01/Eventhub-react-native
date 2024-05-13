import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import Stars from './Stars';
import {useTheme} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: width * 0.03,
  },
  imageContainer: {
    // backgroundColor: 'red',
  },
  image: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 100,
  },
  textContainer: {
    flex: 1,
    gap: height * 0.008,
    // backgroundColor: 'blue',
  },
});
export default function ReviewCard({name, image, date, text, stars}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.textContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <HeadingOne
            text={name}
            fontSize={width * 0.05}
            color={useTheme().colors.themeTextColor}
          />
          <HeadingOne text={date} fontSize={width * 0.04} color="gray" />
        </View>
        <Stars stars={stars} />
        <HeadingOne
          text={text}
          fontSize={width * 0.04}
          color={useTheme().colors.themeTextColor}
          family="AirbnbCereal_W_Bk"
        />
      </View>
    </View>
  );
}
