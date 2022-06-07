import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {IMAGES} from '../../Navigation/Constants/image';
import {Title} from 'react-native-paper';
import styles from '../Category/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useNavigation} from '@react-navigation/native';

export const Stocks = () => {
  const navigation = useNavigation();
  const images = [
    {id: '1', image: IMAGES.image4, discount: '5%-20%'},
    {id: '2', image: IMAGES.image1, discount: '14%'},
    {id: '3', image: IMAGES.image5, discount: '20%'},
    {id: '4', image: IMAGES.image2, discount: '5%'},
    {id: '5', image: IMAGES.image3, discount: '10%'},
  ];
  return (
    <SafeAreaView>
      <Title style={styles.titleText}>Акции</Title>
      <ScrollView horizontal>
        <View style={styles.imageContainer}>
          {images.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate(SCREEN.INFO_BENEFIT)}>
              <Image key={item.id} source={item.image} style={styles.image} />
              <Text style={styles.discount}>{item.discount}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Stocks;
