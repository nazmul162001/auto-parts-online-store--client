import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FaEdit } from 'react-icons/fa';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="w-full h-screen  mb-96">
      <h2 className="text-5xl text-gray-500 font-bold text-center">
        My Profile
      </h2>
      <div class="card grid grid-cols-1 md:grid-cols-2 my-profile mx-auto justify-center items-center md:px-0 4/5 md:w-2/3 bg-base-100 mt-12 w-full relative">
        <button className="text-xl text-right absolute top-0 right-0 m-3">
          <FaEdit />{' '}
        </button>
        <figure className="">
          <img
            className="w-56 p-8 rounded-lg"
            src="https://thumbs.dreamstime.com/b/young-male-profile-colorful-icon-black-hair-blue-tshirt-vector-illustration-eps-81930712.jpg"
            alt="Movie"
          />
        </figure>
        <div class="card-body">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={user.displayName}
            disabled
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            disabled
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="name">Education:</label>
          <input
            type="text"
            name="Education"
            placeholder="Your Education"
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="name">Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Your Current Location"
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="name">Number:</label>
          <input
            type="number"
            name="number"
            placeholder="Your Number"
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="name">Linkedin Profile:</label>
          <input
            type="text"
            name="linkedin"
            placeholder="Your Linkedin Profile Link"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
