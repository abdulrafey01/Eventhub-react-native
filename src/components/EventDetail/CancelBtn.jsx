import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Scale from '../../../function/Scale';
import HeadingOne from '../../abstracts/HeadingOne';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const cancelbtnSize = Scale(375, 271, 58);

const styles = StyleSheet.create({
  cancelBtn: {
    width: cancelbtnSize.WIDTH,
    height: cancelbtnSize.HEIGHT,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: '#EEEEEF',
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default function CancelBtn({onCancel}) {
  return (
    <TouchableWithoutFeedback onPress={onCancel}>
      <View style={styles.cancelBtn}>
        <HeadingOne text={'CANCEL'} color={'black'} fontSize={width * 0.047} />
      </View>
    </TouchableWithoutFeedback>
  );
}
