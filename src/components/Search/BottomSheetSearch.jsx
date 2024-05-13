import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import React, {useState} from 'react';
import HeadingOne from '../../abstracts/HeadingOne';
import FilterOption from './FilterOption';

import SportIcon from '../../svgs/sportsFilter.svg';
import MusicIcon from '../../svgs/musicFilter.svg';
import ArtIcon from '../../svgs/artFilter.svg';
import FoodIcon from '../../svgs/foodFilter.svg';
import TimeButton from './TimeButton';
import Calender from '../../svgs/calenderblue.svg';
import Arrow from '../../svgs/nxtarrow.svg';
import LocButton from './LocButton';

import RangeSlider from 'rn-range-slider';
import RangeThumb from '../../svgs/rangeThumb.svg';
import {useTheme} from '@react-navigation/native';
import CustomRangeSlider from './CustomRangeSlider';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
const optionData = [
  {
    id: 1,
    icon: <SportIcon />,
    title: 'Sports',
    isSelected: true,
  },
  {
    id: 2,
    icon: <MusicIcon />,
    title: 'Music',
    isSelected: false,
  },
  {
    id: 3,
    icon: <ArtIcon />,
    title: 'Art',
    isSelected: true,
  },
  {
    id: 4,
    icon: <FoodIcon />,
    title: 'Food',
    isSelected: false,
  },
];

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: height * 0.04,
    paddingLeft: width * 0.05,
    paddingBottom: height * 0.03,
  },
  tdContainer: {
    gap: height * 0.02,
  },
  timeBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: width * 0.03,
  },
  locContainer: {
    gap: height * 0.02,
  },
  rangeContainer: {
    gap: height * 0.02,
  },
  rangeTxtContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: width * 0.05,
  },
});
export default function BottomSheetSearch() {
  const [rangeLow, setRangeLow] = useState(0);
  const [rangeHigh, setRangeHigh] = useState(0);

  const pan = Gesture.Pan().onUpdate(() => {
    console.log('pan');
  });
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: useTheme().colors.themeColor},
      ]}>
      <HeadingOne
        text={'Filter'}
        fontSize={width * 0.07}
        family="AirbnbCereal_W_Bd"
        color={useTheme().colors.themeTextColor}
      />
      <FlatList
        style={{alignSelf: 'center'}}
        data={optionData}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        ItemSeparatorComponent={() => <View style={{width: width * 0.03}} />}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FilterOption
            icon={item.icon}
            title={item.title}
            isSelected={item.isSelected}
          />
        )}></FlatList>
      <View style={styles.tdContainer}>
        <HeadingOne
          text={'Time & Date'}
          color={useTheme().colors.themeTextColor}
          fontSize={width * 0.045}
        />
        <View style={styles.timeBtnContainer}>
          <TimeButton title={'Today'} width={width * 0.2} isSelected={false} />
          <TimeButton
            title={'Tommorrow'}
            width={width * 0.3}
            isSelected={true}
          />
          <TimeButton
            title={'This Week'}
            width={width * 0.3}
            isSelected={false}
          />
          <TimeButton
            icon={<Calender />}
            title={'Choose from calender'}
            width={width * 0.63}
            isSelected={false}
            endIcon={<Arrow />}
          />
        </View>
      </View>
      <View style={styles.locContainer}>
        <HeadingOne
          text={'Location'}
          color={useTheme().colors.themeTextColor}
          fontSize={16}
        />
        <LocButton
          icon={<Calender />}
          title={'New York, USA'}
          width={width * 0.9}
          height={height * 0.08}
          isSelected={false}
          endIcon={<Arrow />}
        />
      </View>
      <View style={styles.rangeContainer}>
        <View style={styles.rangeTxtContainer}>
          <HeadingOne
            text={'Select Price Range'}
            color={useTheme().colors.themeTextColor}
            fontSize={width * 0.045}
          />
          <HeadingOne
            style={{marginRight: width * 0.04}}
            text={'$20 - $120'}
            color={'#5669FF'}
            fontSize={width * 0.045}
          />
        </View>
        <RangeSlider
          style={{marginRight: width * 0.04}}
          min={0}
          max={100}
          step={1}
          floatingLabel={true}
          initialLow={0}
          initialHigh={100}
          onValueChanged={({low, high}) => {
            setRangeLow(low);
            setRangeHigh(high);
          }}
          renderThumb={() => <RangeThumb />}
          renderRail={() => (
            <View
              style={{
                width: '100%',
                height: height * 0.005,
                backgroundColor: '#E4DFDF',
              }}
            />
          )}
          renderRailSelected={() => (
            <View
              style={{
                width: '100%',
                height: height * 0.005,
                backgroundColor: '#5669FF',
              }}
            />
          )}
        />
      </View>
      <View style={styles.footerBtnContainer}>
        <TimeButton
          title={'RESET'}
          txtColor={'black'}
          fontSize={width * 0.045}
          width={width * 0.35}
          height={height * 0.073}
          isSelected={false}
        />
        <TimeButton
          fontSize={width * 0.045}
          title={'Apply'}
          txtColor={'black'}
          width={width * 0.5}
          height={height * 0.073}
          isSelected={true}
        />
      </View>
    </View>
  );
}
