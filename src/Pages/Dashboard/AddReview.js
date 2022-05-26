import React, { useState } from 'react';
import swal from 'sweetalert';

const AddReview = () => {
  const ratingValue = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(5);

  console.log(rating);

  const handleRating = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.img.value;
    const description = e.target.description.value;

    // console.log(name, img, description);

    const review = {
      name,
      img,
      description,
      rating,
    };

    // post method for insert user review

    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        e.target.reset();
        swal('Congratulations!', 'Successfully Added Your Review!', 'success');
      });
  };

  return (
    <div className="w-full h-screen px-5 md:px-0">
      <h2 className="text-3xl text-gray-500 font-bold text-center my-5">
        Give Us Your Valuable Review
      </h2>
      <div class=" w-full px-4 md:px-0 md:w-1/2 md:mx-auto bg-base-100 shadow-2xl flex rounded-md border-4">
        <form onSubmit={handleRating} class="card-body">
          <h2 class="card-title">Select Your Review</h2>
          <div className="review">
            <div class="rating">
              {ratingValue.map((rating) => (
                <input
                  onClick={() => setRating(rating)}
                  type="radio"
                  value="2"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
              ))}
            </div>
          </div>

          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            class="input input-bordered input-success w-full"
          />

          <label htmlFor="img">Photo URL (optional)</label>
          <input
            type="text"
            name="img"
            placeholder="Your Photo URL"
            class="input input-bordered input-success w-full"
          />

          <textarea
            class="textarea textarea-success"
            name="description"
            required
            placeholder="Add Your Review Description"
          ></textarea>
          <div class="card-actions justify-start">
            <input
              className="btn btn-sm px-5  btn-outline"
              type="submit"
              value="Add Review"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
