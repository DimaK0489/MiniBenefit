import React from 'react';
import {Button, Text, View} from 'react-native';
import {SCREEN} from '../../Navigation/Constants/screens';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

export const InfoBenefit = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(SCREEN.HOME)}
      />
    </View>
  );
};
