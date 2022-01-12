import React, { useState, useEffect } from 'react';
import { HOST_API } from '../../endpoints';
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import { withCookies } from 'react-cookie';

const columns = [
  { field: 'id', headerName: 'Order NO #', width: 150 },
  {
    field: 'contactInformation',
    headerName: 'Contact Information',
    width: 300,
    editable: false,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 150,
    editable: false,
  },
  {
    field: 'products',
    headerName: 'Products',
    sortable: true,
    width: 400,
  },
];

const rows = [
  { id: 1, contactInformation: '+254839302030', amount: 400, products: 'Mangoes' },
  { id: 2, contactInformation: '+254839302030', amount: 908, products: `Kales \n Wakio:test` },
];

const OrdersDashboard = (props) => {
  const { cookies } = props
  const userData = cookies.get('login-res')
  const token = userData?.access
  const [orders, setOrders] = useState([])
  const rowss = orders?.map(order => {
    return { id: order.order, contactInformation: order.buyer.email, amount: 400, products: order.order_items }
  })
  console.log(orders)
  const [currentURL, setCurrentURL] = useState(`${HOST_API}courier/request/`)
  const fetchOrders = () => {
    axios.get(currentURL, {
      headers: { "Authorization": `Bearer ${token}` },
      params: { limit: 25 }
    })
      .then((response) => {
        if (response.status == 200) {
          const appendedOrders = [...orders, ...response.data.results]
          setCurrentURL(response.data.next)
          setOrders(appendedOrders);
        }

      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    fetchOrders()
  }, [currentURL])
  const calculatepriceOfProducts = (price, qty) => {
    var costs = []
    var total
    var val = 0
      const check = () => {
        var calculatePrice = price * qty
        console.log(calculatePrice)
        costs.push(calculatePrice)
        console.log(costs)
      }
      console.log(costs)
      const calculate = costs?.map(prc => {
        total = val += prc
        console.log(total)
    })
    return total
    console.log(total)
  }
  // console.log(rowss)
  return (
    <div style={{ height: 520, width: '100%' }}>
      {/* <DataGrid
        // {...data}
        rows={rows}
        columns={columns}
        loading={rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableSelectionOnClick
      /> */}
      <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th className="th-sm"> Order NO  </th>
            <th className="th-sm"> Order Amount </th>
            <th className="th-sm"> Products </th>
            <th className="th-sm">Buyer Contact info </th>
            <th class="th-sm"> Shopping Source </th>
            <th className="th-sm"> Destination   </th>
            <th className="th-sm"> Instructions </th>
          </tr>
        </thead>
        <tbody>
          {orders?.map(order => (
            <tr>
              <td>#{order?.order}</td>
              <td>
                {order.order_items.map(item => {
                  return calculatepriceOfProducts(item.metadata.price, item.quantity)
                })}
              </td>
              <td>
                {order.order_items.map(item => {
                return (
                  <div key={item?.id}>
                    <tr>
                      <th className="th-sm"> Name  </th>
                      <th className="th-sm"> Price </th>
                      <th className="th-sm"> Qty </th>
                    </tr>
                    <tr>
                      <td style={{paddingRight: 6}}>{item?.metadata.name}</td>
                      <td style={{paddingRight: 15}}>Ksh.{item?.metadata.price}</td>
                      <td>{item?.quantity}</td>
                    </tr>
                  </div>
                )
              })} 
              </td>
              <td>
                {order?.buyer.email} <br/>
                {order?.buyer.tel}
              </td>
              <td>{order.shopping_source}</td>
              <td>{order?.delivery_location}</td>
              <td>{order?.instructions}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className="th-sm"> Order NO  </th>
            <th className="th-sm"> Order Amount </th>
            <th className="th-sm"> Products </th>
            <th className="th-sm">Buyer Contact info </th>
            <th className="th-sm"> Shopping Source </th>
            <th className="th-sm"> Destination   </th>
            <th className="th-sm"> Instructions </th>
          </tr>
        </tfoot>
      </table>

    </div>
  );
}
export default withCookies(OrdersDashboard)
