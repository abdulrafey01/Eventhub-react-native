import {View, Text, StyleSheet, FlatList} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 30,
    paddingLeft: 20,
  },
  tdContainer: {
    gap: 15,
  },
  timeBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  locContainer: {
    gap: 15,
  },
  rangeContainer: {
    gap: 15,
  },
  rangeTxtContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
});
export default function BottomSheetSearch() {
  const [rangeLow, setRangeLow] = useState(0);
  const [rangeHigh, setRangeHigh] = useState(0);
  return (
    <View style={styles.container}>
      <HeadingOne
        text={'Filter'}
        fontSize={25}
        family="AirbnbCereal_W_Bk"
        color={'black'}
      />
      <FlatList
        style={{alignSelf: 'center'}}
        data={optionData}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FilterOption
            icon={item.icon}
            title={item.title}
            isSelected={item.isSelected}
          />
        )}></FlatList>
      <View style={styles.tdContainer}>
        <HeadingOne text={'Time & Date'} color={'black'} fontSize={16} />
        <View style={styles.timeBtnContainer}>
          <TimeButton title={'Today'} width={81} isSelected={false} />
          <TimeButton title={'Tommorrow'} width={110} isSelected={true} />
          <TimeButton title={'This Week'} width={107} isSelected={false} />
          <TimeButton
            icon={<Calender />}
            title={'Choose from calender'}
            width={241}
            isSelected={false}
            endIcon={<Arrow />}
          />
        </View>
      </View>
      <View style={styles.locContainer}>
        <HeadingOne text={'Location'} color={'black'} fontSize={16} />
        <LocButton
          icon={<Calender />}
          title={'New York, USA'}
          width={334}
          height={60}
          isSelected={false}
          endIcon={<Arrow />}
        />
      </View>
      <View style={styles.rangeContainer}>
        <View style={styles.rangeTxtContainer}>
          <HeadingOne
            text={'Select Price Range'}
            color={'black'}
            fontSize={16}
          />
          <HeadingOne
            style={{marginRight: 10}}
            text={'$20 - $120'}
            color={'#5669FF'}
            fontSize={16}
          />
        </View>
        <RangeSlider
          style={{marginRight: 10}}
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
              style={{width: '100%', height: 5, backgroundColor: '#E4DFDF'}}
            />
          )}
          renderRailSelected={() => (
            <View
              style={{width: '100%', height: 5, backgroundColor: '#5669FF'}}
            />
          )}
        />
      </View>
      <View style={styles.footerBtnContainer}>
        <TimeButton
          title={'RESET'}
          txtColor={'black'}
          fontSize={16}
          width={130}
          height={58}
          isSelected={false}
        />
        <TimeButton
          fontSize={16}
          title={'Apply'}
          txtColor={'black'}
          width={185}
          height={58}
          isSelected={true}
        />
      </View>
    </View>
  );
}
