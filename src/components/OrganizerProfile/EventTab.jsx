import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import SearchEventCard from '../Search/SearchEventCard';

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
    padding: 20,
  },
});
export default function EventTab() {
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SearchEventCard
            image={item.image}
            date={item.date}
            title={item.title}
          />
        )}
      />
    </View>
  );
}
