import React from 'react'
import { TextField } from "@mui/material";
import '../App.css';

const TextInput = (props) => {
    const {value="", placeholder="", sx="", variant="outlined", actionOnChange = () => {}} = props;
    
    return (
      <div>
          <TextField variant={variant} sx={sx} onChange={actionOnChange} value={value} placeholder={placeholder} id="text-input" />
      </div>
    );
}

export default TextInput;