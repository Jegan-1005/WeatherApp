//import package
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Platform,
  Image,
  Text,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Keyboard,
} from 'react-native';

// import helper
import {Colors} from '../../helper/colors';
import {Images} from '../../helper/images';

// import component
import CustomHeader from '../../component/customHeader';
import CustomButton from '../../component/customButton';
import {Fonts} from '../../helper/Fonts';
import {searchLocation} from './action/action';

const SearchCity = props => {
  //state
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    Keyboard.dismiss();
    try {
      const params = {
        cityName: input,
      };

      setLoader(true);
      const {status, result} = await searchLocation(params);
      if (status == true) {
        data.push(result);
        setData(data);
        setLoader(false);
        setInput('');
      } else if (status == false) {
        setInput('');
        alert('Something went wrong,Try again');
        setLoader(false);
      }
    } catch (err) {
      alert('Something went wrong,Try again');
      setLoader(false);
      console.log(err, 'errfetchData');
    }
  };
  const _renderItem = ({item, index}) => {
    return (
      <>
        <View style={styles.card}>
          <View>
            <Image source={Images.maxTemp} style={styles.image} />
            <Text style={styles.text1}>Max temp</Text>
            <Text style={styles.text2}>{item?.feels_like}ºc</Text>
          </View>
          <View>
            <Image source={Images.humidity} style={styles.image} />
            <Text style={styles.text1}>Humidity</Text>
            <Text style={styles.text2}>{item?.humidity}ºc</Text>
          </View>
          <View>
            <Image source={Images.wind} style={styles.image} />
            <Text style={styles.text1}>Wind</Text>
            <Text style={styles.text2}>{item?.wind_degrees}ºc</Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={Images.searchCity}
          style={{width: '100%', height: '100%'}}>
          <CustomHeader
            onBackPress={() => {
              props.navigation.goBack();
            }}
            leftIcon="arrow-left"
            subTitle={'Search City'}
            // fontColor={Colors.white}
          />
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                width: '50%',
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: Colors.white,
                borderColor: Colors.white,
                paddingHorizontal: 15,
                fontFamily: Fonts.MEDIUM,
                color: Colors.black,
              }}
              placeholder="Search city"
              placeholderTextColor={Colors.black}
              onChangeText={text => {
                setInput(text);
              }}
              value={input}
            />
            <CustomButton
              title={
                loader ? (
                  <ActivityIndicator size={'small'} color={Colors.white} />
                ) : (
                  'Search'
                )
              }
              onPress={() => {
                fetchData();
              }}
              disabled={loader}
            />
          </View>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={_renderItem}
          />
        </ImageBackground>
      </View>
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
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
});

export default SearchCity;
