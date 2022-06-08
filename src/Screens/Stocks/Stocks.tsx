import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Button, Title} from 'react-native-paper';
import styles from '../Category/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useNavigation} from '@react-navigation/native';
import {stocks} from '../../GlobalStore/GlobalStore';

export const Stocks = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{marginLeft: 20}}>
      <View style={styles.headerContainer}>
        <Title style={styles.titleText}>Акции</Title>
        <Button
          style={styles.buttonAll}
          onPress={() => navigation.navigate(SCREEN.STOCKS)}>
          Все
        </Button>
      </View>
      <ScrollView horizontal>
        <View style={styles.imageContainer}>
          {stocks.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate(SCREEN.INFO_BENEFIT)}>
              <Image key={item.id} source={item.image} style={styles.image} />
              <Text style={styles.discount}>{item.discount}</Text>
              <Text style={styles.description}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Stocks;
