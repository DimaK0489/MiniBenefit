import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GlobalStack} from '../../Navigation/GlobalStack/GlobalStack';
import {Provider as PaperProvider} from 'react-native-paper';

export function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <GlobalStack />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
