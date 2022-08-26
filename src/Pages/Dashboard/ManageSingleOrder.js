import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

const ManageSingleOrder = ({ manage, index }) => {
  const {
    productName,
    email,
    status,
    _id,
    quantity,
    productId,
    name,
    phone,
    address,
    location,
    price,
  } = manage;
  // const [action, setAction] = useState('');
  // console.log(action);

  const handleStatus = async (e) => {
    // setAction(e.target.value);
    // const data = {
    //   status: e.target.value
    // };
    if(e.target.value === "Shift"){
      swal("Do you want to shift this order?");
    } else if(e.target.value === "Pending"){
      swal("Do you want to place the order pending?");
    }
    // console.log(e.target.value);
    await fetch(`https://boiling-ridge-27693.herokuapp.com/manage/${_id}`, {
      method: 'PUT',
      body: JSON.stringify({ status: e.target.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>
        <select
          onChange={handleStatus}
          class="select select-bordered select-sm"
        >
          <option disabled selected>
            {status}
          </option>
          <option>Pending</option>
          <option>Shift</option>
        </select>
      </td>
    </tr>
  );
};

export default ManageSingleOrder;
