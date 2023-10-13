//import package
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  Text,
  RefreshControl,
  ScrollView,
} from 'react-native';
import moment from 'moment';

// import helper
import {Colors} from '../../helper/colors';
import {Fonts} from '../../helper/Fonts';
import {Images} from '../../helper/images';

// import component
import CardDesign2 from './component/CardDesign2';
import CustomHeader from '../../component/customHeader';

//import action
import {searchLocation} from './action/action';

const TodayWeather = props => {
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
          subTitle={'Today Weather Forecast'}
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
            <View style={styles.card}>
              <View>
                <Image source={Images.shinyCloudy} style={styles.image} />
                <Text style={styles.text2}>
                  {moment.unix(data?.sunrise).format('LT') != 'Invalid date'
                    ? moment.unix(data?.sunrise).format('LT')
                    : ''}
                </Text>
                <Text style={styles.text1}>Sunrise</Text>
              </View>
              <View>
                <Image source={Images.night} style={styles.image} />
                <Text style={styles.text2}>
                  {moment.unix(data?.sunset).format('LT') != 'Invalid date'
                    ? moment.unix(data?.sunset).format('LT')
                    : ''}
                </Text>
                <Text style={styles.text1}>Sunset</Text>
              </View>
            </View>
            {/* <CardDesign2 /> */}
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
  card: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text1: {
    color: Colors.black,
    fontFamily: Fonts.BOLD,
    fontSize: 14,
    textAlign: 'center',
  },
  text2: {
    color: Colors.black,
    fontFamily: Fonts.MEDIUM,
    fontSize: 14,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default TodayWeather;
