import React from 'react';
import {View} from 'react-native';
import Category from '../Category';

export const Delivery = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Category title={'Доставка'} />
    </View>
  );
};
export default Delivery;
