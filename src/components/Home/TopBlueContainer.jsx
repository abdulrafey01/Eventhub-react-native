import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import React from 'react';
import LocationBar from './LocationBar';
import SearchBar from '../Auth/SearchBar';
import OptionBox from '../../abstracts/OptionBox';
import SportIcon from '../../svgs/sports.svg';
import MusicIcon from '../../svgs/music.svg';
import FoodIcon from '../../svgs/food.svg';
import ArtIcon from '../../svgs/art.svg';

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
            width={107}
          />
        )}
        ListHeaderComponent={() => <View style={{width: 20}} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 179,
    backgroundColor: '#4A43EC',
    borderBottomEndRadius: 33,
    borderBottomStartRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrayContainer: {
    maxHeight: 39.42,
    position: 'absolute',
    top: 155,
    // paddingLeft: 20,
  },
});
