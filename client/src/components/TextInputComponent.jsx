import React from 'react'
import { TextField } from "@mui/material";
import '../App.css';

const TextInput = (props) => {
    const {value="", placeholder="", styling="", variant="outlined", actionOnChange = () => {}} = props;
    
    return (
      <div>
          <TextField styling={styling} onChange={actionOnChange} value={value} placeholder={placeholder} id="text-input" variant={variant} />
      </div>
    );
}

export default TextInput;
