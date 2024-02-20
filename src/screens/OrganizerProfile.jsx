import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProfileTopSection from '../components/MyProfile/ProfileTopSection';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AboutTab from '../components/OrganizerProfile/AboutTab';
import EventTab from '../components/OrganizerProfile/EventTab';
import ReviewTab from '../components/OrganizerProfile/ReviewTab';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    gap: 20,
  },
});
export default function OrganizerProfile() {
  return (
    <View style={styles.screen}>
      <ProfileTopSection
        name="David Silbia"
        avatar={require('../assets/pngs/avatar2.png')}
        type="Organizer"
      />

      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            width: 58,
            height: 3,
            marginLeft: 32,
            borderRadius: 12,
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
