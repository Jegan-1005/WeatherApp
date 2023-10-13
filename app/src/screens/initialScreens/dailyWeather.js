//import package
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import CustomHeader from '../../component/customHeader';

// import helper
import {Colors} from '../../helper/colors';
import {Fonts} from '../../helper/Fonts';
import {Images} from '../../helper/images';

//import action
import {searchLocation} from './action/action';

const DailyWeather = props => {
  //state
  const [data, setData] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const params = {
        cityName: 'Madurai',
      };
      setLoader(true);
      const {status, result} = await searchLocation(params);
      if (status == true) {
        setData(result);
        setLoader(false);
      } else if (status == false) {
        alert('Something went wrong,Try again');
        setLoader(false);
      }
    } catch (err) {
      alert('Something went wrong,Try again');
      setLoader(false);
      console.log(err, 'errfetchData');
    }
  };
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}>
        <CustomHeader
          onBackPress={() => {
            props.navigation.goBack();
          }}
          leftIcon="arrow-left"
          subTitle={'Daily Weather Forecast'}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              onRefresh={() => {
                fetchData();
              }}
              refreshing={loader}
            />
          }>
          <View style={styles.container}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.mainView}>
                <Text style={styles.text1}>
                  {moment(new Date()).format('MMMM Do')}
                </Text>
                <Text style={styles.text2}>
                  {moment(new Date()).format('YYYY')}
                </Text>
              </View>
              <View style={styles.mainView}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text1}>{data?.feels_like}ºC</Text>
                  <Image source={Images.rainyCloudy} style={styles.image} />
                </View>
                {/* <Text style={styles.text2}>LIGHT RAIN</Text> */}
              </View>
              <View style={styles.mainView}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image source={Images.temp} style={styles.image} />
                  <View>
                    <Text style={styles.text1}>Max {data.max_temp}ºC</Text>
                    <Text style={styles.text2}>Min {data.min_temp}ºC</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainView: {
    // marginHorizontal: 25,
  },
  text1: {
    color: Colors.black,
    fontFamily: Fonts.BOLD,
    fontSize: 14,
  },
  text2: {
    color: Colors.black,
    fontFamily: Fonts.MEDIUM,
    fontSize: 14,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default DailyWeather;
