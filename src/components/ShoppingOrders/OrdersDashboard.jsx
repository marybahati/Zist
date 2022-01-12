import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
    { field: 'id', headerName: 'Order NO #', width: 150 },
    {
      field: 'tel',
      headerName: 'Telephone',
      width: 150,
      editable: false,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 150,
      editable: false,
    },
    {
      field: 'paymentStatus',
      headerName: 'Payment Status',
    //   type: 'number',
      width: 220,
    //   editable: true,
    },
    {
      field: 'orderStatus',
      headerName: 'Order Status',
      sortable: true,
      width: 160,
    },
     {
      field: 'products',
      headerName: 'Products',
      sortable: true,
      width: 160,
    },
  ];
  
  const rows = [
    { id: 1, tel: '+254839302030', amount: 400, paymentStatus: 'Paid',orderStatus: 'Delivered',products:'Mangoes' },
    { id: 2, tel: '+254839302030', amount: 908, paymentStatus: 'Paid', orderStatus: 'Connected to Rider',products:'Kales' },
    { id: 3, tel: '+254839302030', amount: 650, paymentStatus: 'Paid',orderStatus: 'Delivered',products:'Mangoes' },
    { id: 4, tel: '+254839302030', amount: 1500, paymentStatus: 'Paid', orderStatus: 'Delivered',products:'Pineapple' },
    { id: 5, tel: '+254839302030', amount: 1400, paymentStatus: 'Paid',orderStatus: 'Connected to Rider' },
    { id: 6, tel: '+254839302030', amount: 300, paymentStatus: 'Paid',  orderStatus: 'Delivered'  },
    { id: 7, tel: '+254839302030' , amount: 900, paymentStatus: 'Paid', orderStatus: 'Connected to Rider' },
    { id: 8, tel: '+254839302030', amount: 1000, paymentStatus: 'Paid', orderStatus: 'Connected to Rider' } ,
    { id: 9, tel: '+254839302030', amount: 500, paymentStatus: 'Paid',orderStatus: 'Delivered' },
  ];

export default function OrdersDashboard() {

  return (
    <div style={{ height: 520, width: '100%' }}>
      <DataGrid
        // {...data}
        rows={rows}
        columns={columns}
        loading={rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
