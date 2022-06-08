import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Novelties} from '../Novelties/Novelties';
import Stocks from '../Stocks';
import Sale from '../Sale';
import Delivery from '../Delivery';
import Entertainment from '../Entertainment';
import {ScrollView} from 'react-native';

export const Category = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Novelties />
        <Stocks />
        <Sale />
        <Delivery />
        <Entertainment />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Category;
