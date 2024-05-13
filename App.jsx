// Rename $minor to $rnMinorVersionCopy in the android/build.gradle file of react-native-reanimated folder in node_modules. That is my solution for now until they update the library with a fix.

import React, {useRef} from 'react';

import {NavigationContainer, useTheme} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import Verification from './src/screens/Verification';
import ResetPassword from './src/screens/ResetPassword';
import SplashScreen from './src/screens/SplashScreen';
import OnBoarding from './src/screens/OnBoarding';
import Home from './src/screens/Home';
import EventDetail from './src/screens/EventDetail';
import Map from './src/screens/Map';
import SearchScreen from './src/screens/SearchScreen';
import AllEvents, {TopContainer} from './src/screens/AllEvents';
import MyProfile from './src/screens/MyProfile';
import OrganizerProfile from './src/screens/OrganizerProfile';
import {
  Dimensions,
  DrawerLayoutAndroid,
  View,
  useColorScheme,
} from 'react-native';
import Colors from './src/theme/Colors';
import EmptyNotification from './src/screens/EmptyNotification';
import Notification from './src/screens/Notification';
import EmptyEvent from './src/screens/EmptyEvent';
import DrawerView from './src/components/Home/DrawerView';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function App() {
  const theme = useColorScheme();
  const drawer = useRef(null);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer
        theme={theme === 'dark' ? Colors.dark : Colors.light}>
        <DrawerLayoutAndroid
          ref={drawer}
          // drawerBackgroundColor={'black'}
          drawerWidth={width * 0.8}
          renderNavigationView={() => <DrawerView drawer={drawer} />}
          onDrawerOpen={() => console.log('open')}
          onDrawerClose={() => console.log('close')}
          drawerPosition="left">
          <Stack.Navigator
            screenOptions={{
              headerTitle: '',
              headerTransparent: true,
            }}
            initialRouteName="Home">
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
            <Stack.Screen options={{headerShown: false}} name="Home">
              {({navigation}) => (
                <Home drawer={drawer} navigation={navigation} />
              )}
            </Stack.Screen>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="EventDetail"
              component={EventDetail}
            />

            <Stack.Screen name="MapView" component={Map} />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Search"
              component={SearchScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="AllEvents"
              component={AllEvents}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="MyProfile"
              component={MyProfile}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="OrganizerProfile"
              component={OrganizerProfile}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="EmptyNotification"
              component={EmptyNotification}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Notification"
              component={Notification}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="EmptyEvent"
              component={EmptyEvent}
            />
          </Stack.Navigator>
        </DrawerLayoutAndroid>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
