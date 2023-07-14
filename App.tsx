import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Input } from './src/components/atoms/data-picker';
import { Multiple, Range, Single } from './src/components/molecules/data-picker';
import registerTranslation from './src/components/objects/data-picker-registerTranslation';

const styles = StyleSheet.create({
  container: { justifyContent: 'center' },
});

const RNDatePicker = () => {
  registerTranslation;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Input />
        <Multiple />
        <Range />
        <Single />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RNDatePicker;
