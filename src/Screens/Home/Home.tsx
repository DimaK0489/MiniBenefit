import * as React from 'react';
import {useLayoutEffect} from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Category from '../Category';
import {HeaderActions} from '../../Components/HeaderActions/HeaderActions';

const Home = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ScrollView horizontal>
          <HeaderActions />
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
