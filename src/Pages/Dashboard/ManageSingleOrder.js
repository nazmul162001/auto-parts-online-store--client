import React from 'react';

const ManageSingleOrder = ({manage}) => {

  const {name, email} = manage
  
  return (
    <tr>
      <th>1</th>
      <td>{name}</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
    </tr>
  );
};

export default ManageSingleOrder;
