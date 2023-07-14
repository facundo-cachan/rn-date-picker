import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import DatePicker from '../../atoms/data-picker/data-picker-multiple';

import styles from './data-picker-styles';

import type { CalendarDates } from 'react-native-paper-dates/lib/typescript/Date/Calendar';

const DatePickerMultiple = () => {
  const [dates, setDates] = useState<CalendarDates>();
  const [openMultiple, setOpenMultiple] = useState<boolean>(false);

  const onDismiss = useCallback(() => {
    setOpenMultiple(false);
  }, [setOpenMultiple]);
  const onConfirm = (dateSelected: CalendarDates) => {
    setDates(dateSelected);
    onDismiss()
  };

  return (
    <View style={styles.input}>
      <Button onPress={() => setOpenMultiple(true)} uppercase={false} mode='outlined'>
        Pick multiple dates
      </Button>
      <DatePicker
        visible={openMultiple}
        onConfirm={onConfirm}
        onDismiss={onDismiss}
      />
      {dates && <Text>{JSON.stringify(dates, null, 2)}</Text>}
    </View>
  );
}

export default DatePickerMultiple;
