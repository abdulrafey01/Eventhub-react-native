import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import TrianglePointer from '../../abstracts/TrianglePointer';
import EventCard from './EventCard';
import {useTheme} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
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
        <HeadingOne
          text="Upcoming Events"
          fontSize={width * 0.05}
          color={useTheme().colors.themeTextColor}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('AllEvents');
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: width * 0.03,
              alignItems: 'center',
            }}>
            <HeadingOne text="See All" fontSize={width * 0.04} color={'gray'} />
            <TrianglePointer
              color={'gray'}
              style={{transform: [{rotate: '90deg'}]}}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback>
        <View
          style={{
            width: '100%',
            height: height * 0.35,
          }}>
          <FlatList
            contentContainerStyle={{
              backgroundColor: useTheme().colors.cardbg,
            }}
            data={data}
            renderItem={({item}) => (
              <EventCard
                navigation={navigation}
                title={item.title}
                image={item.image}
                location={item.location}
              />
            )}
            ListHeaderComponent={() => (
              <View style={{paddingLeft: width * 0.04}} />
            )}
            horizontal={true}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (
              <View style={{width: width * 0.01}} />
            )}
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
    gap: height * 0.01,
  },
  innerFirst: {
    width: width * 0.9,
    height: height * 0.044,
    // backgroundColor: 'red',
    marginTop: height * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
