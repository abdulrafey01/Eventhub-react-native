import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import HeadingOne from '../../abstracts/HeadingOne';

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
export default function TimeButton({
  title,
  isSelected,
  width,
  icon,
  endIcon,
  height = 42,
  fontSize = 13,
  txtColor = 'gray',
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
        {icon}
        <HeadingOne
          text={title}
          fontSize={fontSize}
          color={isBlue ? 'white' : txtColor}
        />
        <View style={{position: 'absolute', right: 15}}>{endIcon}</View>
      </View>
    </TouchableWithoutFeedback>
  );
}
