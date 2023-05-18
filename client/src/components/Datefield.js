
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function DateField(props) {
  const { onDateChange } = props;
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    if (typeof onDateChange === 'function') {
      onDateChange(event.target.value);
    }
  };

  return (
    <TextField
      id="date-field"
      label="Date"
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

export default DateField;