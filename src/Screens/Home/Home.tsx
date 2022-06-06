import * as React from 'react';
import {useLayoutEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Category from '../Category';
import {SCREEN} from '../../Navigation/Constants/screens';
import {STACK} from '../../Navigation/Constants/stacks';

export const Home = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ScrollView horizontal>
          <View style={styles.container}>
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
          </View>
        </ScrollView>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Category title={'Новинки'} />
        <Category title={'Акции'} />
        <Category title={'Распродажи'} />
        <Category title={'Доставка'} />
        <Category title={'Развлечения'} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
