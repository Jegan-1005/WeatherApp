//import package
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

//import helper
import {Colors} from '../helper/colors';
import {Fonts} from '../helper/Fonts';
import {Images} from '../helper/images';

const CustomHeader = props => {
  const showRightIcon = () => {
    // if (props.rightIcon == "delete") {
    //   return (
    //     <TouchableOpacity>
    //       <Image source={Images.deleteIcon} style={{ width: 25, height: 25 }} />
    //     </TouchableOpacity>
    //   );
    // }
  };
  const showLeftIcon = () => {
    if (props.leftIcon == 'arrow-left') {
      return <Images.backArrow />;
    } else if (props.leftIcon == 'menu') {
      return (
        <TouchableOpacity onPress={props.onBackPress}>
          <Image
            source={Images.Menu}
            style={{width: 20, height: 20, tintColor: Colors.white}}
          />
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={styles.headerStyle}>
      <View style={styles.leftImgView}>
        <TouchableOpacity onPress={props.onBackPress}>
          {showLeftIcon()}
        </TouchableOpacity>
        <Text
          style={[
            styles.largeFont,
            {color: props.fontColor ? props.fontColor : Colors.black},
          ]}>
          {props.subTitle}
        </Text>
        <View style={styles.rightImgView}>
          <TouchableOpacity>{showRightIcon()}</TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    height: 55,
    justifyContent: 'center',
  },
  largeFont: {
    fontFamily: Fonts.BOLD,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  leftImgView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  rightImgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  InrView: {
    backgroundColor: Colors.transparent,
    width: 50,
    height: 30,
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'center',
  },
  InrTxt: {
    alignSelf: 'center',
    color: Colors.black,
  },
});

export default CustomHeader;
