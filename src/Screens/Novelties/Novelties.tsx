import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Title} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../Navigation/Constants/screens';
import styles from '../Category/styles';
import {novelties} from '../../GlobalStore/GlobalStore';

export const Novelties = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{marginLeft: 20}}>
      <Title style={styles.titleText}>Новинки</Title>
      <ScrollView horizontal>
        <View style={styles.imageContainer}>
          {novelties.map(item => (
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
