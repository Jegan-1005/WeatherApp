//import package
import React, {memo} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import moment from 'moment';

//import helper
import {Colors} from '../../../helper/colors';
import {Fonts} from '../../../helper/Fonts';
import {Images} from '../../../helper/images';

const InitialDesign = props => {
  //props
  const {weatherList} = props;
  return (
    <View>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={Images.pin}
          style={{
            height: 25,
            width: 25,
            tintColor: Colors.white,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: Colors.white,
            fontFamily: Fonts.BOLD,
          }}>
          {weatherList?.name}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={[styles.text, {fontSize: 16}]}>
          {moment(new Date()).format('MMMM Do YYYY')}
        </Text>
        <Text style={[styles.text, {fontSize: 70}]}>28ºc</Text>
        <Text style={[styles.text, {fontSize: 20}]}>
          {weatherList &&
            weatherList[0] &&
            weatherList?.weather[0]?.description}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontFamily: Fonts.BOLD,
  },
});
export default memo(InitialDesign);
