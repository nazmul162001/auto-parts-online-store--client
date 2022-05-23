import React from 'react';

const ReviewInfo = ({ review }) => {
  const { name, description, ratings, img } = review;

  return (
    <div className="text-center px-12">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="review-description mb-3">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus officiis praesentium sit voluptatibus, molestiae
          doloremque quia amet? Sit, nam placeat.
        </p>
      </div>
      <span className="font-bold text-primary cursor-pointer">
        Elisa Emmile
      </span>
      <br />
      <div className="rating rating-md mt-2">
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
    </div>
  );
};

export default ReviewInfo;
