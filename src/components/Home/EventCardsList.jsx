import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import TrianglePointer from '../../abstracts/TrianglePointer';
import EventCard from './EventCard';

export default function EventCardsList({navigation}) {
  const data = [
    {
      id: 1,
      image: require('../../assets/pngs/event1.png'),
      title: 'International Band Fe...',
      location: '36 Guild Street London, UK',
    },
    {
      id: 2,
      image: require('../../assets/pngs/event2.png'),
      title: "Jo Malone London's Mo...",
      location: 'Radius Gallery, Santa Cruz, CA',
    },
    {
      id: 3,
      image: require('../../assets/pngs/event1.png'),
      title: 'International Band Fe...',
      location: '36 Guild Street London, UK',
    },
    {
      id: 4,
      image: require('../../assets/pngs/event2.png'),
      title: "Jo Malone London's Mo...",
      location: 'Radius Gallery, Santa Cruz, CA',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.innerFirst}>
        <HeadingOne text="Upcoming Events" fontSize={18} color={'black'} />
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <HeadingOne text="See All" fontSize={14} color={'gray'} />
          <TrianglePointer
            color={'gray'}
            style={{transform: [{rotate: '90deg'}]}}
          />
        </View>
      </View>
      <TouchableWithoutFeedback>
        <View
          style={{
            width: '100%',
            height: 260,
          }}>
          <FlatList
            // style={{paddingLeft: 20}}
            data={data}
            renderItem={({item}) => (
              <EventCard
                navigation={navigation}
                title={item.title}
                image={item.image}
                location={item.location}
              />
            )}
            ListHeaderComponent={() => <View style={{paddingLeft: 20}} />}
            horizontal={true}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  innerFirst: {
    width: 327,
    height: 34,
    // backgroundColor: 'red',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
