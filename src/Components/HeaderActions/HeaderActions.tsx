import React from 'react';
import styles from '../../Screens/Home/styles';
import {Button} from 'react-native-paper';
import {STACK} from '../../Navigation/Constants/stacks';
import {SCREEN} from '../../Navigation/Constants/screens';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const HeaderActions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        mode={'contained'}
        onPress={() => navigation.navigate(STACK.HOME)}>
        Все Скидки
      </Button>
      <Button
        onPress={() => navigation.navigate(SCREEN.NOVELTIES)}>
        Новинки
      </Button>
      <Button onPress={() => navigation.navigate(SCREEN.STOCKS)}>Акции</Button>
      <Button onPress={() => navigation.navigate(SCREEN.SALE)}>
        Распродажи
      </Button>
      <Button onPress={() => navigation.navigate(SCREEN.DELIVERY)}>
        Доставка
      </Button>
      <Button onPress={() => navigation.navigate(SCREEN.ENTERTAINMENT)}>
        Развлечения
      </Button>
    </View>
  );
};
