import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';
import SearchIcon1 from '../../svgs/searchicon1.svg';
import SearchIcon2 from '../../svgs/searchicon2.svg';
import BlurContainer from '../../abstracts/BlurContainer';
import HeadingOne from '../../abstracts/HeadingOne';
import MenuIcon from '../../svgs/menuicon.svg';
import MenuIcon2 from '../../svgs/menuicon2.svg';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default function SearchBar({
  style,
  navigation,
  searchScreen = false,
  input,
  setInput,
  filterOnPress,
}) {
  return searchScreen ? (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={{...styles.container, ...style}}>
        <SearchIcon2 />
        <View style={[styles.line, {backgroundColor: '#5669FF'}]}></View>
        <TextInput
          placeholderTextColor={'gray'}
          placeholder="Search..."
          style={{flex: 1, color: 'gray'}}
          value={input}
          onChangeText={setInput}
        />
        <TouchableWithoutFeedback onPress={filterOnPress}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={[
                styles.blurContainer,
                {backgroundColor: '#5669FF', opacity: 1},
              ]}></View>
            <HeadingOne
              style={{position: 'absolute', right: 10}}
              text="Filters"
              fontSize={12}
              color={'white'}
            />
            <MenuIcon2 style={{position: 'absolute', right: 45}} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Search');
      }}>
      <View style={{...styles.container, ...style}}>
        <SearchIcon1 />
        <View style={styles.line}></View>
        <TextInput
          placeholderTextColor={'#AEAEAE'}
          placeholder="Search..."
          style={{flex: 1}}
        />
        <View style={styles.blurContainer}></View>
        <HeadingOne
          style={{position: 'absolute', right: width * 0.025}}
          text="Filters"
          fontSize={width * 0.034}
          color={'white'}
        />
        <MenuIcon style={{position: 'absolute', right: width * 0.13}} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    flexDirection: 'row',
    gap: width * 0.015,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  line: {
    height: height * 0.035,
    backgroundColor: 'white',
    width: 1,
    opacity: 0.4,
  },
  blurContainer: {
    width: width * 0.21,
    height: height * 0.045,
    borderRadius: 50,
    backgroundColor: 'white',
    opacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
});
