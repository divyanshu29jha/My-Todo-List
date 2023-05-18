import React from 'react'
import { TextField } from "@mui/material";

const TextInput = (props) => {
    const {value="Write your task", actionOnChange = () => console.log("Inside TextInput component")} = props;
    
    return (
      <div>
          <TextField onChange={actionOnChange} value={value} placeholder="Enter your task" id="outlined-basic" variant="outlined" />
      </div>
    );
}

export default TextInput;
