import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';
import styles from '../Category/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useNavigation} from '@react-navigation/native';
import {entertainment} from '../../GlobalStore/GlobalStore';

export const Entertainment = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{marginLeft: 20}}>
      <Title style={styles.titleText}>Развлечения</Title>
      <ScrollView horizontal>
        <View style={styles.imageContainer}>
          {entertainment.map(item => (
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
export default Entertainment;
