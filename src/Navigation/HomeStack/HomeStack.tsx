import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STACK} from '../Constants/stacks';
import {SCREEN, screens} from '../Constants/screens';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={STACK.HOME}
        component={screens[SCREEN.HOME]}
        options={{
          title: 'HomeScreen',
        }}
      />
    </Stack.Navigator>
  );
}
