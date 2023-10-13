//import package
import React from 'react';
import {View, ScrollView} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <ScrollView>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{flex: 1, marginTop: 20}}>
        <View>
          <Text>jehadflvdbfn</Text>
        </View>
      </DrawerContentScrollView>
    </ScrollView>
  );
};
export default CustomDrawer;
