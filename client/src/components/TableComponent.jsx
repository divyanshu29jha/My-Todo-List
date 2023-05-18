import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const TableComponent = (props) => {
  
  const {columns, rows} = props;
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};

export default TableComponent;