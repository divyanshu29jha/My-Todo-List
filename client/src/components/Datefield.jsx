
import React from 'react';
import TextField from '@material-ui/core/TextField';

function DateField(props) {
  const { value, onChange, customStyle, label } = props;

  return (
    <TextField
      id="date-field"
      label={label}
      type="date"
      value={value || ''}
      onChange={onChange}
      style={customStyle}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

export default DateField;