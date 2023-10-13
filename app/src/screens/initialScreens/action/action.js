//import package
import axios from 'axios';
import {ApiConstants} from '../../../api/config';

export const getWeatherData = async data => {
  console.log(data, 'dataaaa');
  try {
    let respData = await axios({
      method: 'get',
      url:
        ApiConstants.API_URL +
        `?lat=${data.lat}&lon=${data.lon}&appid=${ApiConstants.APIKEY}`,
    });
    return {
      status: true,
      result: respData.data,
    };
  } catch (err) {
    console.log(err, 'errrrgetWeatherData');
    return {
      status: false,
    };
  }
};

export const getAllWeatherData = async data => {
  try {
    let respData = await axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${data.lat}&lon=${data.lon}&dt=${data.time}&appid=${ApiConstants.APIKEY}`,
    });
    return {
      status: true,
      result: respData.data,
    };
  } catch (err) {
    console.log(err, 'errrrgetAllWeatherData');
    return {
      status: false,
    };
  }
};

export const searchLocation = async data => {
  try {
    let respData = await axios({
      method: 'get',
      url: ApiConstants._API_URL + data.cityName,
      headers: {
        'X-Api-Key': 'r6b+fxkofNQecyQUj/fDCg==773UcA7LCzbZgZD2',
      },
    });
    return {
      status: true,
      result: respData.data,
    };
  } catch (err) {
    console.log(err, 'errrsearchLocation');
    return {
      status: false,
    };
  }
};
