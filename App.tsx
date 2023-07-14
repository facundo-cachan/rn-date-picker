import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import registerTranslation from '@objects/data-picker-registerTranslation';
import { DataPickerMultiple, DataPickerRange, DataPickerSingle, DatePickers } from '@ui/';

const styles = StyleSheet.create({
  container: { justifyContent: 'center' },
});

const RNDatePicker = () => {
  registerTranslation;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <DatePickers.Input />
        <DataPickerMultiple />
        <DataPickerRange />
        <DataPickerSingle />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RNDatePicker;
