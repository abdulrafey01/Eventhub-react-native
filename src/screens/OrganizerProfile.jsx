import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import ProfileTopSection from '../components/MyProfile/ProfileTopSection';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AboutTab from '../components/OrganizerProfile/AboutTab';
import EventTab from '../components/OrganizerProfile/EventTab';
import ReviewTab from '../components/OrganizerProfile/ReviewTab';
import {useTheme} from '@react-navigation/native';
import HeaderComponent from '../abstracts/HeaderComponent';

const Tab = createMaterialTopTabNavigator();

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    gap: height * 0.025,
  },
});

export default function OrganizerProfile({navigation}) {
  return (
    <View
      style={[styles.screen, {backgroundColor: useTheme().colors.themeColor}]}>
      <HeaderComponent title={''} navigation={navigation} />
      <ProfileTopSection
        name="David Silbia"
        avatar={require('../assets/pngs/avatar2.png')}
        type="Organizer"
      />

      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            width: width * 0.16,
            height: height * 0.005,
            marginLeft: width * 0.09,
            borderRadius: 12,
            backgroundColor: '#5669FF',
          },
        }}>
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#5669FF',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {fontFamily: 'AirbnbCereal_W_Bd'},
          }}
          name="About"
          component={AboutTab}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#5669FF',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {fontFamily: 'AirbnbCereal_W_Bd'},
          }}
          name="Event"
          component={EventTab}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#5669FF',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {fontFamily: 'AirbnbCereal_W_Bd'},
          }}
          name="Reviews"
          component={ReviewTab}
        />
      </Tab.Navigator>
    </View>
  );
}
