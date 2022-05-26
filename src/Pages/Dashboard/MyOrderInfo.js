import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const MyOrderInfo = ({ order, index }) => {
  // delete order
  const handleDelete = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'You want to remove this order?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('Your order has been deleted!', {
          icon: 'success',
        });
        const url = `https://boiling-ridge-27693.herokuapp.com/order/${id}`;
        fetch(url, {
          method: 'DELETE',
        }).then((res) => res.json());
      } else {
        // swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <tr>
      <th> {index + 1} </th>
      <td>{order.productName}</td>
      <td>{order.quantity} </td>
      <td>{order.phone}</td>
      <td>{order.address}</td>
      <td>{order.price}</td>
      <td>
        {order.price && !order.paid && (
          <Link to={`/dashboard/payment/${order._id}`}>
            <button className="btn btn-xs btn-secondary px-5 ">Pay</button>
          </Link>
        )}
        {order.price && order.paid && (
          <div>
            <p className="text-success text-xl">paid</p>
            <p className="text-gray-500">
              <strong>Trx:</strong> {order.transactionId}
            </p>
          </div>
        )}
      </td>
      <td>
        {order.paid ? (
          <button disabled className="btn btn-xs btn-error">
            Delete
          </button>
        ) : (
          <button
            onClick={() => handleDelete(order._id)}
            className="btn btn-xs btn-error"
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default MyOrderInfo;
