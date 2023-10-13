//import package
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//import screens
import Home from '../screens/initialScreens/home';

//import helper
import {Colors} from '../helper/colors';
import {Fonts} from '../helper/Fonts';
import {Images} from '../helper/images';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  //props
  const navigation = useNavigation();

  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: Colors.white,
          drawerInactiveTintColor: 'transparent',
          drawerLabelStyle: {
            color: Colors.white,
            fontFamily: Fonts.MEDIUM,
            fontSize: 15,
          },
        }}
        contentContainerStyle={{flex: 1}}
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        drawerContent={props => {
          return (
            <ScrollView>
              <DrawerContentScrollView
                {...props}
                contentContainerStyle={{flex: 1, marginTop: 20}}>
                <DrawerItemList {...props} />
                <View>
                  <Image
                    source={Images.logo}
                    style={{width: 250, height: 250, alignSelf: 'center'}}
                  />
                  <View style={{marginHorizontal: 20, marginTop: 50}}>
                    <TouchableOpacity
                      style={styles.fullView}
                      onPress={() => {
                        navigation.navigate('DailyWeather');
                      }}>
                      <Image
                        source={Images.DailyForeCast}
                        style={{width: 30, height: 30}}
                      />
                      <Text style={[styles.text, {fontSize: 20}]}>
                        Daily Forecast
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.fullView, {marginTop: 20}]}
                      onPress={() => {
                        navigation.navigate('TodayWeather');
                      }}>
                      <Image
                        source={Images.TodayForeCast}
                        style={{width: 30, height: 30}}
                      />
                      <Text style={[styles.text, {fontSize: 20}]}>
                        Today Forecast
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.fullView, {marginTop: 20}]}
                      onPress={() => {
                        navigation.navigate('SearchCity');
                      }}>
                      <Image
                        source={Images.SavedLocation}
                        style={{width: 30, height: 30}}
                      />
                      <Text style={[styles.text, {fontSize: 20}]}>
                        Search Location
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </DrawerContentScrollView>
            </ScrollView>
          );
        }}>
        <Drawer.Screen name={'Home'} component={Home} />
      </Drawer.Navigator>
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    color: Colors.black,
    fontFamily: Fonts.BOLD,
  },
  fullView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default DrawerNavigator;
