import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import Stars from './Stars';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  imageContainer: {
    // backgroundColor: 'red',
  },
  image: {
    width: 34,
    height: 34,
    borderRadius: 100,
  },
  textContainer: {
    flex: 1,
    gap: 5,
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
          <HeadingOne text={name} fontSize={18} color="black" />
          <HeadingOne text={date} fontSize={15} color="gray" />
        </View>
        <Stars stars={stars} />
        <HeadingOne
          text={text}
          fontSize={15}
          color="black"
          family="AirbnbCereal_W_Bk"
        />
      </View>
    </View>
  );
}
