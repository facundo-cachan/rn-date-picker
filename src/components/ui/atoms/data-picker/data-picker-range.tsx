import React, { useCallback, useState } from 'react';
import { DatePickerModal } from 'react-native-paper-dates';

import type { BaseCalendarProps } from 'react-native-paper-dates/lib/typescript/Date/Calendar';
import type { DatePickerProps } from './data-picker-props';

type RangeProps = Pick<BaseCalendarProps, 'startDate' | 'endDate'>;

const Range = ({
  visible,
  onDismiss,
  onConfirm
}: DatePickerProps) => {
  const [range] = useState<RangeProps>({ startDate: undefined, endDate: undefined });

  const confirm = useCallback(
    ({ startDate, endDate }: RangeProps) => {
      onConfirm({ startDate, endDate });
    },
    [range]
  );

  return (
    <DatePickerModal
      locale='es'
      mode='range'
      visible={visible}
      onDismiss={onDismiss}
      onConfirm={confirm}
      startDate={range.startDate}
      endDate={range.endDate}
    />
  );
};

export default Range;
