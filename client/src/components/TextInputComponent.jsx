import React from 'react'
import { TextField } from "@mui/material";
import '../App.css';

const TextInput = (props) => {
    const {value="", placeholder="", styling="", variant="outlined", actionOnChange = () => {}} = props;
    
    return (
      <div>
          <TextField id="text-input" styling={styling} onChange={actionOnChange} value={value} placeholder={placeholder} variant={variant} />
      </div>
    );
}

export default TextInput;
