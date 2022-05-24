import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import UsersRow from './UsersRow';

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('users', () =>
    fetch('http://localhost:5000/user', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2 className="text-3xl text-gray-500">All Users {users.length} </h2>

      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UsersRow key={user._id} user={user} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
