import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const TableComponent = (props) => {
  
  const {columns, rows, style} = props;
  
  
  return (
    <div style={style}>
      <DataGrid columns={columns} rows={rows}  />
    </div>
  );
};

export default TableComponent;