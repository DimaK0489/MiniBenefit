import React from 'react';
import {View} from 'react-native';
import Category from '../Category';
import styles from './styles';

export const Novelties = () => {
  return (
    <View style={styles.container}>
      <Category title={'Новинки'} />
    </View>
  );
};
