//import package
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  Platform,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

// import component
import CustomHeader from '../../component/customHeader';
import CardDesign from './component/CardDesign';
import CardDesign2 from './component/CardDesign2';
import InitialDesign from './component/InitialDesign';

// import helper
import {Colors} from '../../helper/colors';
import {Images} from '../../helper/images';

//import action
import {getWeatherData} from './action/action';

const Home = props => {
  //props
  const navigation = useNavigation();

  //state
  const [location, setLocation] = useState(null);
  const [weatherList, setWeatherList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    handleLocationPermission();
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    try {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLocation({latitude, longitude});
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (err) {
      console.log(err, 'errrgetCurrentLocation');
    }
  };

  const handleLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const permissionCheck = await check(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        if (permissionCheck === RESULTS.DENIED) {
          const permissionRequest = await request(
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          );
          if (permissionRequest === RESULTS.GRANTED) {
            getCurrentLocation();
          } else {
            console.log('Location perrmission denied.');
          }
        }
      }
    } catch (err) {
      console.log(err, 'errrhandleLocationPermission');
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchWeatherData();
    }, [location]),
  );
  const fetchWeatherData = async () => {
    try {
      setLoader(true);
      const params = {
        lat: location?.latitude,
        lon: location?.longitude,
      };
      const {status, result} = await getWeatherData(params);
      if (status == true) {
        setLoader(false);
        setWeatherList(result);
      }
    } catch (err) {
      setLoader(false);
      console.log(err, 'err');
    }
  };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}>
        <View style={styles.container}>
          <ImageBackground
            source={Images.Home}
            style={{width: '100%', height: '100%'}}>
            <CustomHeader
              onBackPress={() => {
                navigation.openDrawer();
              }}
              leftIcon="menu"
            />
            <ScrollView
              refreshControl={
                <RefreshControl
                  onRefresh={() => {
                    fetchWeatherData();
                  }}
                  refreshing={loader}
                />
              }>
              <InitialDesign weatherList={weatherList} />
              <CardDesign weatherList={weatherList} />
              {/* <CardDesign2 /> */}
            </ScrollView>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;

// api response
// {
//   "base": "stations",
//   "clouds": { "all": 40 },
//   "cod": 200,
//   "coord": { "lat": 9.885, "lon": 78.0522 },
//   "dt": 1697085431,
//   "id": 1254356,
//   "main": {
//     "feels_like": 309.39,
//     "humidity": 66,
//     "pressure": 1013,
//     "temp": 304.07,
//     "temp_max": 304.07,
//     "temp_min": 304.07
//   },
//   "name": "Tirupparangunram",
//   "sys": {
//     "country": "IN",
//     "id": 9216,
//     "sunrise": 1697070955,
//     "sunset": 1697113958,
//     "type": 1
//   },
//   "timezone": 19800,
//   "visibility": 6000,
//   "weather": [
//     {
//       "description": "scattered clouds",
//       "icon": "03d",
//       "id": 802,
//       "main": "Clouds"
//     }
//   ],
//   "wind": { "deg": 300, "speed": 2.06 }
// }
