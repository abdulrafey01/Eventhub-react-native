import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import SearchBar from '../components/Auth/SearchBar';
import SearchEventCard from '../components/Search/SearchEventCard';

import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetSearch from '../components/Search/BottomSheetSearch';
import {useTheme} from '@react-navigation/native';
import HeaderComponent from '../abstracts/HeaderComponent';

import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
const data = [
  {
    id: 1,
    image: require('../assets/pngs/searchimg1.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'A virtual evening of smooth jazz',
  },
  {
    id: 2,
    image: require('../assets/pngs/searchimg2.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'Jo malone london mothers day',
  },
  {
    id: 3,
    image: require('../assets/pngs/searchimg3.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'Women leadership conference',
  },
  {
    id: 4,
    image: require('../assets/pngs/searchimg4.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'International kids safe parents night out',
  },
  {
    id: 5,
    image: require('../assets/pngs/searchimg5.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'International gala music festival',
  },
  {
    id: 6,
    image: require('../assets/pngs/searchimg3.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'Women leadership conference',
  },
  {
    id: 7,
    image: require('../assets/pngs/searchimg4.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'International kids safe parents night out',
  },
  {
    id: 8,
    image: require('../assets/pngs/searchimg5.png'),
    date: '1st May - Sat - 2:00 PM',
    title: 'International gala music festival',
  },
];

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',

    gap: height * 0.02,
    // gap: 20,
  },
});
export default function SearchScreen({navigation}) {
  let [input, setInput] = useState('');
  let [itemsList, setItemsList] = useState(data);
  let [translucent, setTranslucent] = useState(true);
  const refRBSheet = useRef();

  useEffect(() => {
    console.log(input);
    setItemsList(
      data.filter(item =>
        item.title.toLowerCase().includes(input.toLowerCase()),
      ),
    );
  }, [input]);

  return (
    <View
      style={[styles.screen, {backgroundColor: useTheme().colors.themeColor}]}>
      <StatusBar
        barStyle={
          useTheme().colors.themeColor === 'white'
            ? 'dark-content'
            : 'light-content'
        }
        translucent={true}
      />

      <HeaderComponent title={'Search'} navigation={navigation} />
      <SearchBar
        input={input}
        setInput={setInput}
        searchScreen={true}
        filterOnPress={() => refRBSheet.current.expand()}
      />
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          backgroundColor: useTheme().colors.cardbg,
          width: width,
        }}
        ItemSeparatorComponent={() => <View style={{height: height * 0.02}} />}
        showsVerticalScrollIndicator={false}
        data={itemsList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SearchEventCard
            image={item.image}
            date={item.date}
            title={item.title}
          />
        )}
      />
      {/* <RBSheet
        ref={refRBSheet}
        height={height * 0.9}
        animationType="slide"
        useNativeDriver={true}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        customModalProps={{
          gestureEnabled: true,
        }}
        customStyles={{
          container: {
            borderTopEndRadius: 38,
            backgroundColor: useTheme().colors.themeColor,
            borderTopStartRadius: 38,
          },
        }}
        onOpen={() => {
          setTranslucent(false);
        }}
        onClose={() => {
          setTranslucent(true);
        }}>
        <BottomSheetSearch />
      </RBSheet> */}
      <BottomSheet
        index={-1}
        snapPoints={[200]}
        enablePanDownToClose={true}
        // containerStyle={{
        //   backgroundColor: 'red',
        // }}
        enableDynamicSizing={true}
        Onac
        backgroundStyle={{
          backgroundColor: useTheme().colors.themeColor,
          borderTopStartRadius: 38,
          borderTopEndRadius: 38,
        }}
        ref={refRBSheet}>
        <BottomSheetView>
          <BottomSheetSearch />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
