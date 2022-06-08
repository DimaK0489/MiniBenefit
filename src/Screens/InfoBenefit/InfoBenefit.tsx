import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {STACK} from '../../Navigation/Constants/stacks';

export const InfoBenefit = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(STACK.HOME)}
      />
    </View>
  );
};
