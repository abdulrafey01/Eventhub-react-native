import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import LocIcon from '../../svgs/locFilter.svg';
const styles = StyleSheet.create({
  container: {
    width: 81,
    height: 42,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E4DFDF',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
export default function LocButton({
  title,
  isSelected,
  width,
  icon,
  endIcon,
  height = 42,
}) {
  const [isBlue, setIsBlue] = useState(isSelected);
  return (
    <TouchableWithoutFeedback onPress={() => setIsBlue(!isBlue)}>
      <View
        style={[
          styles.container,
          {width},
          {height},
          {
            backgroundColor: isBlue ? '#5669FF' : 'white',
            justifyContent: icon ? 'flex-start' : 'center',
          },
        ]}>
        {<LocIcon />}
        <HeadingOne
          text={title}
          fontSize={16}
          family="AirbnbCereal_W_Bk"
          color={isBlue ? 'white' : 'black'}
        />
        <View style={{position: 'absolute', right: 15}}>{endIcon}</View>
      </View>
    </TouchableWithoutFeedback>
  );
}
