import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import HeadingOne from '../../abstracts/HeadingOne';
import Scale from '../../../function/Scale';

import SearchIcon2 from '../../svgs/searchicon2.svg';
import FollowPerson from './FollowPerson';
import PurpleButton from '../../abstracts/PurpleArrowButton';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const searchSize = Scale(375, 327, 50);
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: height * 0.01,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.01,
    flex: 1,
  },
  searchContainer: {
    width: searchSize.WIDTH,
    height: searchSize.HEIGHT,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    paddingHorizontal: searchSize.WIDTH * 0.09,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const data = [
  {
    id: 1,
    name: 'Alex Lee',
    followers: '2k',
    image: require('../../assets/pngs/avatar.png'),
  },
  {
    id: 2,
    name: 'Michael Ulasi',
    followers: '56',
    image: require('../../assets/pngs/avatar2.png'),
  },
  {
    id: 3,
    name: 'Emily Johnson',
    followers: '123',
    image: require('../../assets/pngs/avatar.png'),
  },
  {
    id: 4,
    name: 'John Smith',
    followers: '789',
    image: require('../../assets/pngs/avatar2.png'),
  },
  {
    id: 5,
    name: 'Sarah Brown',
    followers: '456',
    image: require('../../assets/pngs/avatar.png'),
  },
  {
    id: 6,
    name: 'Alex Lee',
    followers: '2k',
    image: require('../../assets/pngs/avatar.png'),
  },
  {
    id: 7,
    name: 'Michael Ulasi',
    followers: '56',
    image: require('../../assets/pngs/avatar2.png'),
  },
  {
    id: 8,
    name: 'Emily Johnson',
    followers: '123',
    image: require('../../assets/pngs/avatar.png'),
  },
  {
    id: 9,
    name: 'John Smith',
    followers: '789',
    image: require('../../assets/pngs/avatar2.png'),
  },
  {
    id: 10,
    name: 'Sarah Brown',
    followers: '456',
    image: require('../../assets/pngs/avatar.png'),
  },
  // Add more users as needed...
];

export default function InviteSheet() {
  return (
    <View style={[styles.container]}>
      <HeadingOne
        text={'Invite Friend'}
        fontSize={width * 0.07}
        family="AirbnbCereal_W_Bd"
        color={useTheme().colors.themeTextColor}
      />
      <View
        style={[
          styles.searchContainer,
          {
            backgroundColor: useTheme().colors.themeColor,
          },
        ]}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={'gray'}
          style={{color: useTheme().colors.themeTextColor}}
        />
        <SearchIcon2 />
      </View>
      <FlatList
        style={{flex: 1, marginTop: height * 0.04}}
        data={data}
        renderItem={({item}) => <FollowPerson {...item} />}
        showsVerticalScrollIndicator={false}
      />
      <View
        style={{
          position: 'absolute',
          bottom: height * 0.03,
          // bottom: height * 0.03,
          left: width * 0.15,
        }}>
        <PurpleButton text={'INVITE'} />
      </View>
    </View>
  );
}
