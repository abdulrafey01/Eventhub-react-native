import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import SearchEventCard from '../Search/SearchEventCard';
import {useTheme} from '@react-navigation/native';
import HeaderComponent from '../../abstracts/HeaderComponent';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const data = [
  {
    id: 1,
    image: require('../../assets/pngs/searchimg1.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'A virtual evening of smooth jazz',
  },
  {
    id: 2,
    image: require('../../assets/pngs/searchimg2.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'Jo malone london mothers day',
  },
  {
    id: 3,
    image: require('../../assets/pngs/searchimg3.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'Women leadership conference',
  },
  {
    id: 4,
    image: require('../../assets/pngs/searchimg4.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'International kids safe parents night out',
  },
  {
    id: 5,
    image: require('../../assets/pngs/searchimg5.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'International gala music festival',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: height * 0.02,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    gap: height * 0.02,
  },
});

export default function NearbyEvents() {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, {backgroundColor: useTheme().colors.cardbg}]}>
      {data.map(item => (
        <SearchEventCard
          key={item.id} // Key is important for performance
          image={item.image}
          date={item.date}
          title={item.title}
        />
      ))}
    </View>
  );
}
