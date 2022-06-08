import React from 'react';
import {Button} from 'react-native-paper';
import {STACK} from '../../Navigation/Constants/stacks';
import {SCREEN} from '../../Navigation/Constants/screens';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

export const HeaderActions = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView horizontal style={styles.scroll}>
        <Button
          mode={'contained'}
          onPress={() => navigation.navigate(STACK.HOME)}>
          Все Скидки
        </Button>
        <Button onPress={() => navigation.navigate(SCREEN.STOCKS)}>
          Акции
        </Button>
        <Button onPress={() => navigation.navigate(SCREEN.SALE)}>
          Распродажи
        </Button>
        <Button onPress={() => navigation.navigate(SCREEN.DELIVERY)}>
          Доставка
        </Button>
        <Button onPress={() => navigation.navigate(SCREEN.ENTERTAINMENT)}>
          Развлечения
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};
