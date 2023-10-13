//import package
import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../helper/colors';
import {Fonts} from '../../../helper/Fonts';
import {Images} from '../../../helper/images';

const CardDesign2 = props => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.text2}>28 cº</Text>
        <Text style={styles.text1}>Scattered clouds</Text>
        <Image source={Images.shinyCloudy} style={styles.image} />
        <Text style={styles.text2}>10.00AM</Text>
      </View>
      <View>
        <Text style={styles.text2}>28 cº</Text>
        <Text style={styles.text1}>Scattered clouds</Text>
        <Image source={Images.rainyCloudy} style={styles.image} />
        <Text style={styles.text2}>12.00PM</Text>
      </View>
      <View>
        <Text style={styles.text2}>28 cº</Text>
        <Text style={styles.text1}>Scattered clouds</Text>
        <Image source={Images.sunCloudy} style={styles.image} />
        <Text style={styles.text2}>2.00PM</Text>
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
    fontSize: 10,
    textAlign: 'center',
  },
  text2: {
    color: Colors.black,
    fontFamily: Fonts.BOLD,
    textAlign: 'center',
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});
export default CardDesign2;
