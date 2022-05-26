import React from 'react';
import swal from 'sweetalert';

const UsersRow = ({ user, refetch }) => {
  const { email, role } = user;

  // make admin handler
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });

    swal({
      title: 'Are you sure?',
      text: 'You Want to Make an Admin?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('Successfully Make an Admin', {
          icon: 'success',
        });

        fetch(`http://localhost:5000/user/admin/${email}`, {
          method: 'PUT',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
          });
      } else {
        // swal("Your imaginary file is safe!");
      }
    });
  };

  const handleRemove = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'You want to remove this user?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('user has been deleted!', {
          icon: 'success',
        });
        const url = `http://localhost:5000/admin/${id}`;
        fetch(url, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
          });
      } else {
        // swal('Your imaginary file is safe!');
      }
    });
  };

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold"> {email} </div>
          </div>
        </div>
      </td>
      <td>
        {role === 'admin' ? (
          <button className="btn btn-xs bg-success px-9">Admin</button>
        ) : (
          <button onClick={makeAdmin} className="btn btn-xs px-5 btn-secondary">
            Make Admin
          </button>
        )}
      </td>
      <th>
        <button
          onClick={() => handleRemove(user._id)}
          className="btn btn-error btn-xs px-5"
        >
          Remove
        </button>
      </th>
    </tr>
  );
};

export default UsersRow;
