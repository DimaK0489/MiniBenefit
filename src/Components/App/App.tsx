import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GlobalStack} from '../../Navigation/GlobalStack/GlobalStack';

export function App() {
  return (
    <SafeAreaProvider>
      <GlobalStack />
    </SafeAreaProvider>
  );
}
