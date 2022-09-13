import React from "react";
import { FaEdit } from "react-icons/fa";
import swal from "sweetalert";

const UpdateProfile = () => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const education = e.target.Education.value;
    const number = e.target.number.value;
    const location = e.target.location.value;
    const linkedin = e.target.linkedin.value;

    console.log(education, number, location, linkedin)
    const profile = {Education: education, Location: location, Linkedin: linkedin, Number: number}
    fetch("http://localhost:5000/saveProfile", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(profile),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          e.target.reset();
          swal("Congratulations!", "Profile update successfully!", "success");
        });
    
  };
  return (
    <div className="mt-5 text-left">
      {/* <!-- The button to open modal --> */}
      <label htmlFor="my-modal-6" className="btn modal-button">
        <FaEdit />
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="form-control">
            <form onSubmit={handleUpdate}>
              <label htmlFor="name">Education:</label>
              <input
                type="text"
                name="Education"
                placeholder="Your Education"
                class="input input-bordered input-primary w-full "
              />
              <label htmlFor="name">Location:</label>
              <input
                type="text"
                name="location"
                placeholder="Your Current Location"
                class="input input-bordered input-primary w-full "
              />
              <label htmlFor="name">Number:</label>
              <input
                type="number"
                name="number"
                placeholder="Your Number"
                class="input input-bordered input-primary w-full "
              />
              <label htmlFor="name">Linkedin Profile:</label>
              <input
                type="text"
                name="linkedin"
                placeholder="Your Number"
                class="input input-bordered input-primary w-full "
              />
              <button type="submit" className="btn w-full">
                <label htmlFor="my-modal-6" className="">
                  Update Profile
                </label>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
