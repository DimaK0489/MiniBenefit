import React from 'react';
import {View} from 'react-native';
import Category from '../Category';

export const Stocks = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Category title={'Акции'} />
    </View>
  );
};
export default Stocks;
