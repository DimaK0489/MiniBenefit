import * as React from 'react';
import {useLayoutEffect} from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderActions} from '../../Components/HeaderActions/HeaderActions';
import Category from '../Category';

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
      <Category />
    </SafeAreaView>
  );
};
export default Home;
