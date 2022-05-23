import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [service, setService] = useState({});
  const {
    name,
    img,
    description,
    _id,
    price,
    minimumOrder,
    availableQuantity,
  } = service;

  const { id } = useParams();

  const url = `http://localhost:5000/service/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setService(data));

  return (
    <section className="purchase w-full  mb-96">
      <h1 className="text-center text-gray-500 opacity-60 text-5xl mt-12 font-bold">
        WellCome To Purchase Page
      </h1>
      <h3 className="text-center text-gray-500 text-xl font-bold">
        Here is the Detail information Of the item
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 justify-center my-28 shadow-2xl border-[1px] border-opacity-30 border-gray-500 mx-12">
        <div className="product-image flex items-center justify-center">
          <img src={img} alt="Album" />
        </div>
        <div class="card-body text-left">
          <h4 className="text-xl">
            {' '}
            <strong className="text-gray-500">Product ID:</strong> {_id}{' '}
          </h4>
          <h4 className="text-xl">
            {' '}
            <strong className="text-gray-500">Name:</strong> {name}{' '}
          </h4>
          <h4 className="text-xl">
            {' '}
            <strong className="text-gray-500">Price: $</strong> {price}{' '}
          </h4>
          <h4 className="text-xl">
            {' '}
            <strong className="text-gray-500">
              Minimum Order Quantity:
            </strong>{' '}
            {minimumOrder}{' '}
          </h4>
          <h4 className="text-xl">
            {' '}
            <strong className="text-gray-500">Available Quantity:</strong>{' '}
            {availableQuantity}{' '}
          </h4>
          <h4 className="text-xl text-gray-500">
            {' '}
            <strong className="text-gray-500">Product Description:</strong>{' '}
            {description}{' '}
          </h4>
        </div>
      </div>
      <div className="form">
        <h2 className="text-center text-gray-500 text-5xl">
          Purchase This Item
        </h2>
        <p className="text-center text-xl text-gray-500">
          Fill Up the form below to confirm your order
        </p>
        <div className="purchase-form mt-5">
          <div class="hero min- bg-gray-500 py-28">
              <div class="card w-4/5 md:w-2/3 shadow-2xl bg-base-100">
                <div class="card-body">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      value={user.displayName}
                      class="input input-bordered"
                      disabled
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      class="input input-bordered"
                      disabled
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Address</span>
                    </label>
                    <input
                      type="text"
                      placeholder='Enter Your Address'
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Phone No:</span>
                    </label>
                    <input
                      type="text"
                      placeholder='Enter Your Phone Number'
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Location</span>
                    </label>
                    <input
                      type="text"
                      placeholder='Enter Your Exact Location'
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-primary">Purchase</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
