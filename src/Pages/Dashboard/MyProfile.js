import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";

const MyProfile = () => {
  const [myUser, setMyUser] = useState([]);
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState([]);

  fetch("http://localhost:5000/getUserProfile")
    .then((res) => res.json())
    .then((data) => setProfile(data[0]));

  console.log(profile);

  const { Education, Number, Location, Linkedin } = profile;

  const navigate = useNavigate();
  // const { data: userInfo, isLoading } = useQuery('getUser', () =>
  //   fetch(`http://localhost:5000/user/${user.email}`).then(
  //     (res) => res.json()
  //   )
  // );

  // if (isLoading) {
  //   return <Spinner />;
  // }

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyUser(data[0]));
  }, [user.email]);

  console.log(myUser);

  return (
    <div className="w-full h-screen ">
      <h2 className="text-5xl text-gray-500 font-bold text-center">
        My Profile
      </h2>
      <div class="card grid grid-cols-1 md:grid-cols-2 my-profile mx-auto justify-center items-center md:px-0 4/5 md:w-2/3 bg-base-100 mt-12 w-full relative">
        <span className="text-xl text-right absolute top-0 right-0 m-3">
          {/* <label htmlFor="my-modal-6" className="btn modal-button"> <FaEdit /> </label> */}
          <UpdateProfile></UpdateProfile>
        </span>
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
            class="input input-bordered input-primary w-full "
          />
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            disabled
            class="input input-bordered input-primary w-full "
          />
          <label htmlFor="name">Education:</label>
          <input
            type="email"
            name="email"
            value={Education}
            disabled
            class="input input-bordered input-primary w-full "
          />
          <label htmlFor="name">Number:</label>
          <input
            type="number"
            name="number"
            value={Number}
            disabled
            class="input input-bordered input-primary w-full "
          />
          <label htmlFor="name">Linkedin:</label>
          <input
            type="text"
            name="email"
            value={Linkedin}
            disabled
            class="input input-bordered input-primary w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
