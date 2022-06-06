import {View} from 'react-native';
import React from 'react';
import Category from '../Category';

export const Sale = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Category title={'Распродажи'} />
    </View>
  );
};
export default Sale;
