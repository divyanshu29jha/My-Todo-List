import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = (props) => {
  
    const {color="success", sx={ color: 'grey.500' }} = props;
  
    
    return (
    <Stack sx={sx}>
      <CircularProgress color={color} />
    </Stack>
  );
}

export default Loader;