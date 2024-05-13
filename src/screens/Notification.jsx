import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import HeaderComponent from '../abstracts/HeaderComponent';
import SingleNotification from '../components/Notification/SingleNotification';
import RBSheet from 'react-native-raw-bottom-sheet';
import Scale from '../../function/Scale';
import {useTheme} from '@react-navigation/native';
import ShareSheet from '../components/Notification/InviteSheet';
import InviteSheet from '../components/Notification/InviteSheet';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const rbSheetSize = Scale(375, 375, 741);
export default function Notification({navigation}) {
  const data = [
    {
      id: 1,
      image: require('../assets/pngs/avatar.png'),
      name: 'David Silbia',
      text: "Invite Jo Malone London's",
      time: 'Just now',
      showBtn: true,
    },

    {
      id: 4,
      image: require('../assets/pngs/avatar2.png'),
      name: 'Adnan Safi',
      text: 'Started following you',
      time: '5 min ago',
    },
    {
      id: 5,
      image: require('../assets/pngs/avatar.png'),
      name: 'David Silbia',
      text: "Invite Jo Malone London's",
      time: 'Just now',
      showBtn: true,
    },
    {
      id: 6,
      image: require('../assets/pngs/avatar2.png'),
      name: 'Adnan Safi',
      text: 'Started following you',
      time: '5 min ago',
    },
  ];

  const refRBSheet = useRef();
  return (
    <View
      style={[styles.screen, {backgroundColor: useTheme().colors.themeColor}]}>
      <HeaderComponent title={'Notification'} navigation={navigation} />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <SingleNotification
            onClick={() => refRBSheet.current.open()}
            {...item}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <RBSheet
        ref={refRBSheet}
        height={screenHeight * 0.95}
        // height={rbSheetSize.HEIGHT}
        animationType="slide"
        closeOnDragDown={true}
        dragFromTopOnly={true}
        customStyles={{
          container: {
            borderTopEndRadius: 38,
            backgroundColor: useTheme().colors.themeColor,
            borderTopStartRadius: 38,
          },
        }}>
        <InviteSheet />
      </RBSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: screenHeight * 0.02,
  },
});
