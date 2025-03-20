import 'expo-router/entry';

import { SafeAreaView, Text } from 'react-native';

import Profile from './profile/_layout';
import React from 'react';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Profile name={'seongkeun oh'}>
        <Text>hello</Text>
      </Profile>
    </SafeAreaView>
  );
};

export default App;
