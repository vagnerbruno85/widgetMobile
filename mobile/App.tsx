import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, StatusBar, Text, View} from 'react-native';

import Widget from './src/components/Widget';
import {theme} from './src/theme';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      {/* <StatusBar style="ligth" backgroundColor="transparent" translucent /> */}
      <Widget />
    </View>
  );
}
