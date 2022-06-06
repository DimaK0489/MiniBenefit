import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STACK} from '../Constants/stacks';
import {SCREEN, screens} from '../Constants/screens';

const Stack = createNativeStackNavigator();

export default function CategoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={STACK.CATEGORY}
        component={screens[SCREEN.CATEGORY]}
        options={{
          title: 'CategoryScreen',
        }}
      />
    </Stack.Navigator>
  );
}
