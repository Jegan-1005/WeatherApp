//import package
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//import screens
import Splash from '../screens/initialScreens/splash';
import DailyWeather from '../screens/initialScreens/dailyWeather';
import TodayWeather from '../screens/initialScreens/todayWeather';
import SearchCity from '../screens/initialScreens/searchCity';
import DrawerNavigator from './drawer';
const Stack = createStackNavigator();

const StackNavigator = props => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Splash'} component={Splash} />
        <Stack.Screen name={'Home'} children={() => <DrawerNavigator />} />
        <Stack.Screen name={'DailyWeather'} component={DailyWeather} />
        <Stack.Screen name={'TodayWeather'} component={TodayWeather} />
        <Stack.Screen name={'SearchCity'} component={SearchCity} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
