//import package
import React, {memo, useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../helper/colors';
import {Fonts} from '../../../helper/Fonts';
import {Images} from '../../../helper/images';

const CardDesign = props => {
  //props
  const {weatherList} = props;
  return (
    <View style={styles.card}>
      <View>
        <Image source={Images.maxTemp} style={styles.image} />
        <Text style={styles.text1}>Max temp</Text>
        <Text style={styles.text2}>{weatherList?.main?.temp_max}ºc</Text>
      </View>
      <View>
        <Image source={Images.humidity} style={styles.image} />
        <Text style={styles.text1}>Humidity</Text>
        <Text style={styles.text2}>{weatherList?.main?.humidity}ºc</Text>
      </View>
      <View>
        <Image source={Images.wind} style={styles.image} />
        <Text style={styles.text1}>Wind</Text>
        <Text style={styles.text2}>{weatherList?.main?.temp_min}ºc</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
    color: Colors.grey,
    fontFamily: Fonts.MEDIUM,
    fontSize: 14,
    textAlign: 'center',
  },
  text2: {
    color: Colors.black,
    fontFamily: Fonts.BOLD,
    textAlign: 'center',
    fontSize: 16,
  },
  image: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
});
export default memo(CardDesign);
