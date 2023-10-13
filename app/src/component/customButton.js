//import package
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

//import helper
import {Colors} from '../helper/colors';
import {Fonts} from '../helper/Fonts';

const CustomButton = props => {
  return (
    <View style={styles.contentContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}
        disabled={props.disabled}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginHorizontal: 25,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: Fonts.MEDIUM,
    textTransform: 'uppercase',
    marginVertical: 15,
  },
});
export default CustomButton;
