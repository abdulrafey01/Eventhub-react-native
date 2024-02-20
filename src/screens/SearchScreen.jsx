import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import SearchBar from '../components/Auth/SearchBar';
import SearchEventCard from '../components/Search/SearchEventCard';

import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetSearch from '../components/Search/BottomSheetSearch';
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
];

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
  },
});
export default function SearchScreen() {
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
    <View style={styles.screen}>
      <StatusBar barStyle={'dark-content'} translucent={true} />
      <SearchBar
        input={input}
        setInput={setInput}
        searchScreen={true}
        filterOnPress={() => refRBSheet.current.open()}
      />
      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
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
      <RBSheet
        ref={refRBSheet}
        height={661}
        animationType="slide"
        closeOnDragDown={true}
        dragFromTopOnly={true}
        customStyles={{
          container: {
            borderTopEndRadius: 38,
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
      </RBSheet>
    </View>
  );
}
