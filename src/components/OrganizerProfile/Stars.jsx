import {View, Text} from 'react-native';
import React from 'react';
import Star from '../../svgs/star.svg';

export default function Stars({stars}) {
  const starComponents = [];

  for (let index = 0; index < stars; index++) {
    starComponents.push(<Star key={index} />);
  }
  return <View style={{flexDirection: 'row', gap: 3}}>{starComponents}</View>;
}
