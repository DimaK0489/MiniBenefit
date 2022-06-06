import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Title} from 'react-native-paper';
import {Image, ScrollView, View} from 'react-native';
import styles from './styles';
import {IMAGES} from '../../Navigation/Constants/image';

interface Props {
  title: string;
}

export const Category = ({title}: Props) => {
  const [images] = useState([
    {id: '1', image: IMAGES.image1},
    {id: '2', image: IMAGES.image2},
    {id: '3', image: IMAGES.image3},
    {id: '4', image: IMAGES.image4},
    {id: '5', image: IMAGES.image5},
  ]);

  return (
    <SafeAreaView>
      <Title style={styles.titleText}>{title}</Title>
      <ScrollView horizontal>
        <View style={styles.imageContainer}>
          {images.map(item => (
            <Image key={item.id} source={item.image} style={styles.image} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Category;
