//import package
import React, {useEffect} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';

// import helper
import {Colors} from '../../helper/colors';
import {Images} from '../../helper/images';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 1000);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={Images.splashImg}
          style={{width: '100%', height: '100%'}}></ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
