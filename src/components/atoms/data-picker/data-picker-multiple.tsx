import React, { useCallback, useState } from 'react';
import { DatePickerModal } from 'react-native-paper-dates';

import type { CalendarDates } from 'react-native-paper-dates/lib/typescript/Date/Calendar';
import type { DatePickerProps } from './data-picker-props';

const Multiple = ({
  visible,
  onDismiss,
  onConfirm
}: DatePickerProps) => {
  const [dates] = useState<CalendarDates>();

  const confirm = useCallback((params: { dates: React.SetStateAction<CalendarDates> }) => {
    onConfirm(params.dates)
  }, [dates]);

  return (
    <DatePickerModal
      locale='es'
      mode='multiple'
      dates={dates}
      visible={visible}
      onConfirm={confirm}
      onDismiss={onDismiss}
    />
  );
}

export default Multiple;
