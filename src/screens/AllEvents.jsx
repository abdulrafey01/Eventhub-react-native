import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import SearchEventCard from '../components/Search/SearchEventCard';
import HeadingOne from '../abstracts/HeadingOne';
import SearchIcon from '../svgs/blacksearch.svg';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    image: require('../assets/pngs/searchimg1.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'A virtual evening of smooth jazz',
    location: 'Radius Gallery - Santa Cruz, CA',
  },
  {
    id: 2,
    image: require('../assets/pngs/searchimg2.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'Jo malone london mothers day',
    location: 'Radius Gallery - Santa Cruz, CA',
  },
  {
    id: 3,
    image: require('../assets/pngs/searchimg3.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'Women leadership conference',
    location: 'Radius Gallery - Santa Cruz, CA',
  },
  {
    id: 4,
    image: require('../assets/pngs/searchimg4.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'International kids safe parents night out',
    location: 'Radius Gallery - Santa Cruz, CA',
  },
  {
    id: 5,
    image: require('../assets/pngs/searchimg5.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'International gala music festival',
    location: 'Radius Gallery - Santa Cruz, CA',
  },
];

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
  },
  topContainer: {
    width: 300,
    height: 30,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 150,
  },
  iconsContainer: {
    width: 80,
    height: 30,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  menu: {
    gap: 2,
  },
});
export default function AllEvents() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle={'dark-content'} />

      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SearchEventCard
            image={item.image}
            date={item.date}
            title={item.title}
            location={item.location}
          />
        )}
      />
    </View>
  );
}

const TopContainer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <HeadingOne
        text="Events"
        fontSize={18}
        color={'black'}
        family="AirbnbCereal_W_Bd"
      />
      <View style={styles.iconsContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <SearchIcon />
        </TouchableWithoutFeedback>
        <View style={styles.menu}>
          <View
            style={{
              height: 3,
              width: 3,
              backgroundColor: 'black',
              borderRadius: 10,
            }}></View>
          <View
            style={{
              height: 3,
              width: 3,
              backgroundColor: 'black',
              borderRadius: 10,
            }}></View>
          <View
            style={{
              height: 3,
              width: 3,
              backgroundColor: 'black',
              borderRadius: 10,
            }}></View>
        </View>
      </View>
    </View>
  );
};

export {TopContainer};
