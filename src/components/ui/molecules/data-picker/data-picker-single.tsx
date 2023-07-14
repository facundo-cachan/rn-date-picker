import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import DatePicker from '../../atoms/data-picker/data-picker-single';
import styles from './data-picker-styles';

import type { CalendarDate } from 'react-native-paper-dates/lib/typescript/Date/Calendar';

export type Props = { date?: CalendarDate };

const Single = () => {
  const [date, setDate] = useState<CalendarDate | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = useCallback(
    (date: CalendarDate) => {
      setOpen(false);
      setDate(date);
    },
    [setOpen, setDate]
  );

  return (
    <View style={styles.input}>
      <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
        Pick single date
      </Button>
      <DatePicker
        visible={open}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
      />
      {date && <Text>{JSON.stringify(date)}</Text>}
    </View>
  );
};

export default Single;
