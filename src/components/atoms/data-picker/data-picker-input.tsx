import React, { useState } from 'react';
import { DatePickerInput } from 'react-native-paper-dates';

const Input = () => {
  const [inputDate, setInputDate] = useState<Date | undefined>(undefined);

  return (
    <DatePickerInput
      locale='es'
      label='Birthdate'
      value={inputDate}
      onChange={d => setInputDate(d)}
      inputMode='start'
    />
  );
};

export default Input;
