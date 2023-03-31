import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function DataGridDemo(props) {
const columns = [

  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },

  {
    field: "Email",
    headerName:'Email',
    width: 150,
    editable: true,
  },

  {
    field: 'contact',
    headerName: 'contact',
    width: 150,
    editable: true,
  },
  {
    field: 'Address',
    headerName: 'Address',
    width: 150,
    editable: true,
  },
  {
    field: 'password',
    headerName: 'password',
    width: 150,
    editable: true,
  },

  {
    field: 'Designation',
    headerName: 'Desigenation',
    width: 150,
    editable: true,
  },


];

const rows = [
  { id: 1, lastName: 'son', firstName: 'Jon', Email:'tusharGupta8859@gmail.com', Contact:8859932237, Address:'mendu gate police choki hathras', Designation:'software developer', Password:'Anshul@123'   },
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
  return (
    <>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>
  );
}