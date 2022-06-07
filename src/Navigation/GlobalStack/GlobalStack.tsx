import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {STACK} from '../Constants/stacks';
import {SCREEN, screens} from '../Constants/screens';

const Stack = createNativeStackNavigator();

export const GlobalStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={STACK.HOME}
        screenOptions={{headerShown: true}}>
        <Stack.Screen name={STACK.HOME} component={screens[SCREEN.HOME]} />
        <Stack.Screen
          name={SCREEN.NOVELTIES}
          component={screens[SCREEN.NOVELTIES]}
          options={{
            title: 'NoveltiesScreen',
          }}
        />
        <Stack.Screen
          name={SCREEN.STOCKS}
          component={screens[SCREEN.STOCKS]}
          options={{
            title: 'StocksScreen',
          }}
        />
        <Stack.Screen
          name={SCREEN.SALE}
          component={screens[SCREEN.SALE]}
          options={{
            title: 'SaleScreen',
          }}
        />
        <Stack.Screen
          name={SCREEN.DELIVERY}
          component={screens[SCREEN.DELIVERY]}
          options={{
            title: 'DeliveryScreen',
          }}
        />
        <Stack.Screen
          name={SCREEN.ENTERTAINMENT}
          component={screens[SCREEN.ENTERTAINMENT]}
          options={{
            title: 'EntertainmentScreen',
          }}
        />
        <Stack.Screen
          name={SCREEN.INFO_BENEFIT}
          component={screens[SCREEN.INFO_BENEFIT]}
          options={{
            title: 'InfoBenefitScreen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
