import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import SportIcon from '../../svgs/sportsFilter.svg';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  round: {
    width: 63,
    height: 63,
    backgroundColor: '#5669FF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#5669FF',
    elevation: 5,
  },
});

export default function FilterOption({icon, title, isSelected}) {
  const [isBlue, setIsBlue] = useState(isSelected);
  return (
    <TouchableWithoutFeedback onPress={() => setIsBlue(!isBlue)}>
      <View style={styles.container}>
        <View
          style={[
            styles.round,
            {
              backgroundColor: isBlue ? '#5669FF' : 'white',
              elevation: isBlue ? 15 : 0,
              borderWidth: isBlue ? 0 : 1,
              borderColor: isBlue ? '#5669FF' : '#E4DFDF',
            },
          ]}>
          <View
            style={{
              backgroundColor: isBlue
                ? '#5669FF'
                : title === 'Music' || title === 'Food'
                ? 'white'
                : 'gray',
              borderRadius: 100,
              borderWidth: isBlue
                ? 0
                : title === 'Music' || title === 'Food'
                ? 0
                : 1,
            }}>
            {icon}
          </View>
        </View>
        <HeadingOne
          text={title}
          color={'black'}
          fontSize={14}
          family="AirbnbCereal_W_Bk"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
