import {View} from 'react-native';
import React from 'react';
import Category from '../Category';

export const Entertainment = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Category title={'Развлечения'} />
    </View>
  );
};
export default Entertainment;
