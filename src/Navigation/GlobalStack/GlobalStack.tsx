import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {STACK} from '../Constants/stacks';
import {SCREEN, screens} from '../Constants/screens';
import {HeaderActions} from '../../Components/HeaderActions/HeaderActions';

const Stack = createNativeStackNavigator();

export const GlobalStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={STACK.HOME}
        screenOptions={{
          headerBackVisible: false,
          headerShown: true,
          headerRight: () => <HeaderActions />,
        }}>
        <Stack.Screen name={STACK.HOME} component={screens[SCREEN.HOME]} />
        <Stack.Screen
          name={SCREEN.NOVELTIES}
          component={screens[SCREEN.NOVELTIES]}
          options={{
            title: 'Новинки',
          }}
        />
        <Stack.Screen
          name={SCREEN.STOCKS}
          component={screens[SCREEN.STOCKS]}
          options={{
            title: 'Акции',
          }}
        />
        <Stack.Screen
          name={SCREEN.SALE}
          component={screens[SCREEN.SALE]}
          options={{
            title: 'Распродажи',
          }}
        />
        <Stack.Screen
          name={SCREEN.DELIVERY}
          component={screens[SCREEN.DELIVERY]}
          options={{
            title: 'Доставка',
          }}
        />
        <Stack.Screen
          name={SCREEN.ENTERTAINMENT}
          component={screens[SCREEN.ENTERTAINMENT]}
          options={{
            title: 'Развлечения',
          }}
        />
        <Stack.Screen
          name={SCREEN.INFO_BENEFIT}
          component={screens[SCREEN.INFO_BENEFIT]}
          options={{
            title: 'Информация о бенефите',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
