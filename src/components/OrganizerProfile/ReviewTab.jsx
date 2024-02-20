import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import ReviewCard from './ReviewCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
});

const data = [
  {
    id: 1,
    name: 'John Doe',
    image: require('../../assets/pngs/avatar.png'),
    date: '10 June',
    reviewText:
      'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.',
    stars: 4,
  },
  {
    id: 2,
    name: 'Angelina Zolly',
    image: require('../../assets/pngs/avatar.png'),
    date: '10 June',
    reviewText:
      'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.',
    stars: 4,
  },
  {
    id: 3,
    name: 'Zenifro Bolex',
    image: require('../../assets/pngs/avatar.png'),
    date: '10 June',
    reviewText:
      'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.',
    stars: 4,
  },
];
export default function ReviewTab() {
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 30}} />}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ReviewCard
            name={item.name}
            image={item.image}
            date={item.date}
            text={item.reviewText}
            stars={item.stars}
          />
        )}
      />
    </View>
  );
}
