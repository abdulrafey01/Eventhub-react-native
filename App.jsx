// Rename $minor to $rnMinorVersionCopy in the android/build.gradle file of react-native-reanimated folder in node_modules. That is my solution for now until they update the library with a fix.

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import Verification from './src/screens/Verification';
import ResetPassword from './src/screens/ResetPassword';
import SplashScreen from './src/screens/SplashScreen';
import OnBoarding from './src/screens/OnBoarding';
import Home from './src/screens/Home';
import EventDetail from './src/screens/EventDetail';
import MapView from './src/screens/MapView';
import SearchScreen from './src/screens/SearchScreen';
import AllEvents, {TopContainer} from './src/screens/AllEvents';
import MyProfile from './src/screens/MyProfile';
import OrganizerProfile from './src/screens/OrganizerProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: '',
          headerTransparent: true,
        }}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          options={{headerShown: false}}
          name="OnBoarding"
          component={OnBoarding}
        />
        <Stack.Screen
          options={{headerShown: false}} // so that back button to splash screen wont come
          name="Signin"
          component={Signin}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verify" component={Verification} />
        <Stack.Screen name="ResetPass" component={ResetPassword} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Event Details',
            headerTintColor: 'white',
          }}
          name="EventDetail"
          component={EventDetail}
        />

        <Stack.Screen name="MapView" component={MapView} />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Search',
            headerTransparent: false,
            headerShadowVisible: false,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'AirbnbCereal_W_Md',
            },
          }}
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: () => {
              return <TopContainer />;
            },
            headerTransparent: false,
            headerShadowVisible: false,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'AirbnbCereal_W_Md',
            },
          }}
          name="AllEvents"
          component={AllEvents}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Profile',
            headerTransparent: false,
            headerShadowVisible: false,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'AirbnbCereal_W_Md',
            },
          }}
          name="MyProfile"
          component={MyProfile}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: false,
            headerShadowVisible: false,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'AirbnbCereal_W_Md',
            },
          }}
          name="OrganizerProfile"
          component={OrganizerProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
