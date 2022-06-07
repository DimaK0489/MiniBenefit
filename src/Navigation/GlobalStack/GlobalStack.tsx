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
          name={STACK.CATEGORY}
          component={screens[SCREEN.CATEGORY]}
        />
        <Stack.Screen
          name={SCREEN.NOVELTIES}
          component={screens[SCREEN.NOVELTIES]}
        />
        <Stack.Screen name={SCREEN.STOCKS} component={screens[SCREEN.STOCKS]} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
