import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import DatePicker from '../../atoms/data-picker/data-picker-range';

import styles from './data-picker-styles';

import type { BaseCalendarProps } from 'react-native-paper-dates/lib/typescript/Date/Calendar';

type Props = Pick<BaseCalendarProps, 'startDate' | 'endDate'>;

const Range = () => {
  const [range, setRange] = useState<Props>({ startDate: undefined, endDate: undefined });
  const [open, setOpen] = useState<boolean>(false);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = ({ startDate, endDate }: Props) => {
    setOpen(false);
    setRange({ startDate, endDate });
  };

  return (
    <View style={styles.input}>
      <Button onPress={() => setOpen(true)} uppercase={false} mode='outlined'>
        Pick range
      </Button>
      <DatePicker
        visible={open}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
      />
      {range && <Text>{JSON.stringify(range)}</Text>}
    </View>
  );
};

export default Range;
