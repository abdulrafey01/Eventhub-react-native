import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

export default function SimpleButton2({
  width,
  height,
  color = '#5669FF',
  borderColor = '#5669FF',
  text,
  textColor = '#5669FF',
  preIcon,
  postIcon,
}) {
  const [isBlue, setIsBlue] = React.useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => setIsBlue(!isBlue)}>
      <View
        style={{
          ...styles.container,
          width,
          height,
          backgroundColor: isBlue ? '#5669FF' : color,
          borderRadius: 10,
          borderWidth: 1,
          borderColor,
        }}>
        <View style={{marginRight: 10}}>{preIcon}</View>
        <Text style={{color: isBlue ? 'white' : textColor}}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
