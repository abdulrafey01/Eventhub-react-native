import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import LocationBar from './LocationBar';
import SearchBar from '../Auth/SearchBar';
import OptionBox from '../../abstracts/OptionBox';
import SportIcon from '../../svgs/sports.svg';
import MusicIcon from '../../svgs/music.svg';
import FoodIcon from '../../svgs/food.svg';
import ArtIcon from '../../svgs/art.svg';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default function TopBlueContainer({OnClick, navigation}) {
  const data = [
    {id: 1, name: 'Sports', color: '#F0635A', icon: <SportIcon />},
    {id: 2, name: 'Music', color: '#F59762', icon: <MusicIcon />},
    {id: 3, name: 'Food', color: '#29D697', icon: <FoodIcon />},
    {id: 4, name: 'Art', color: '#46CDFB', icon: <ArtIcon />},
  ];

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <View style={styles.container}>
        <LocationBar OnClick={OnClick} />
        <SearchBar navigation={navigation} style={{marginTop: 10}} />
      </View>
      <FlatList
        style={styles.arrayContainer}
        data={data}
        renderItem={({item}) => (
          <OptionBox
            color={item.color}
            text={item.name}
            icon={item.icon}
            width={width * 0.26}
          />
        )}
        ListHeaderComponent={() => <View style={{width: width * 0.07}} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{width: height * 0.015}} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 0.25,
    backgroundColor: '#4A43EC',
    borderBottomEndRadius: 33,
    borderBottomStartRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrayContainer: {
    // maxHeight: height * 0.25,
    // backgroundColor: 'red',
    position: 'absolute',
    top: height * 0.22,
    // paddingLeft: 20,
  },
});
