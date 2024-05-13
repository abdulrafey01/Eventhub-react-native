import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';
import SearchEventCard from '../components/Search/SearchEventCard';
import HeadingOne from '../abstracts/HeadingOne';
import SearchIcon from '../svgs/blacksearch.svg';
import {useNavigation, useTheme} from '@react-navigation/native';
import HeaderComponent from '../abstracts/HeaderComponent';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

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
  {
    id: 6,
    image: require('../assets/pngs/searchimg3.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'International gala music festival',
    location: 'Radius Gallery - Santa Cruz, CA',
  },
];

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    gap: height * 0.03,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // gap: 20,
  },
  topContainer: {
    width: width * 0.82,
    height: height * 0.05,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: width * 0.4,
  },
  iconsContainer: {
    width: width * 0.23,
    height: height * 0.04,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: width * 0.06,
  },
  menu: {
    gap: width * 0.007,
  },
});
export default function AllEvents({navigation}) {
  return (
    <View
      style={[styles.screen, {backgroundColor: useTheme().colors.themeColor}]}>
      <StatusBar
        barStyle={
          useTheme().colors.themeColor === 'white'
            ? 'dark-content'
            : 'light-content'
        }
      />

      <HeaderComponent title={'Events'} navigation={navigation} />

      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          backgroundColor: useTheme().colors.cardbg,
          width: width,
          // paddingTop: height * 0.03,
        }}
        ItemSeparatorComponent={() => <View style={{height: height * 0.02}} />}
        data={data}
        showsVerticalScrollIndicator={false}
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
    <View
      style={[
        styles.topContainer,
        // {backgroundColor: useTheme().colors.themeColor},
      ]}>
      <HeadingOne
        text="Events"
        fontSize={width * 0.055}
        color={useTheme().colors.themeTextColor}
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
              height: width * 0.01,
              width: width * 0.01,
              backgroundColor: useTheme().colors.themeTextColor,
              borderRadius: 10,
            }}></View>
          <View
            style={{
              height: width * 0.01,
              width: width * 0.01,
              backgroundColor: useTheme().colors.themeTextColor,
              borderRadius: 10,
            }}></View>
          <View
            style={{
              height: width * 0.01,
              width: width * 0.01,
              backgroundColor: useTheme().colors.themeTextColor,
              borderRadius: 10,
            }}></View>
        </View>
      </View>
    </View>
  );
};

export {TopContainer};
