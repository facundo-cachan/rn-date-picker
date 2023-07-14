import React, { useCallback, useState } from 'react';
import { DatePickerModal } from 'react-native-paper-dates';

import type { CalendarDate } from 'react-native-paper-dates/lib/typescript/Date/Calendar';
import type { DatePickerProps } from './data-picker-props';

type Props = { date: CalendarDate };

const Single = ({
  visible,
  onDismiss,
  onConfirm
}: DatePickerProps) => {
  const [date, setDate] = useState<CalendarDate>(undefined);

  const confirm = useCallback(
    ({ date }: Props) => {
      setDate(date);
      onConfirm(date as CalendarDate);
    },
    [date]
  );

  return (
    <DatePickerModal
      locale='es'
      mode='single'
      visible={visible}
      onDismiss={onDismiss}
      onConfirm={confirm}
      date={date}
    />
  );
};

export default Single;
