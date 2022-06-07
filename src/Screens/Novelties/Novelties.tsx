import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {IMAGES} from '../../Navigation/Constants/image';
import {Title} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../Navigation/Constants/screens';
import styles from '../Category/styles';

export const Novelties = () => {
  const navigation = useNavigation();
  const images = [
    {id: '1', image: IMAGES.image1, discount: '10%', title: 'Bogema'},
    {id: '2', image: IMAGES.image2, discount: '5%-15%', title: 'Pizza Mania'},
    {id: '3', image: IMAGES.image3, discount: '15%', title: 'Falcon'},
    {id: '4', image: IMAGES.image4, discount: '5%-20%', title: 'Fantastic'},
    {id: '5', image: IMAGES.image5, discount: '15%', title: 'EnglishDom'},
    {id: '6', image: IMAGES.image6, discount: '10%', title: 'Silver Screen'},
    {id: '7', image: IMAGES.image7, discount: '5%', title: 'Florists'},
  ];
  return (
    <SafeAreaView>
      <Title style={styles.titleText}>Новинки</Title>
      <ScrollView horizontal>
        <View style={styles.imageContainer}>
          {images.map(item => (
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
