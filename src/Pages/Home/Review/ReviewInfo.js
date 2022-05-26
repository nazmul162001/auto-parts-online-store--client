import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ReviewInfo = ({ review }) => {
  const { name, description, rating, img } = review;

  const GetRating = (rating) => {
    if (rating <= 1) {
      return (
        <div className="flex items-center">
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-slate-300" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-slate-300" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-slate-300" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-slate-300" />{' '}
          </span>
        </div>
      );
    } else if (rating <= 2) {
      return (
        <div className="flex items-center">
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-slate-300" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-slate-300" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-slate-300" />{' '}
          </span>
        </div>
      );
    } else if (rating <= 3) {
      return (
        <div className="flex items-center">
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-slate-300" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-slate-300" />{' '}
          </span>
        </div>
      );
    } else if (rating <= 4) {
      return (
        <div className="flex items-center">
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-slate-300" />{' '}
          </span>
        </div>
      );
    } else if (rating <= 5) {
      return (
        <div className="flex items-center">
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
          <span>
            {' '}
            <AiFillStar className="text-2xl text-secondary" />{' '}
          </span>
        </div>
      );
    }
  };

  return (
    <div className="text-center px-12">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="review-description mb-3">
        <p>{description}</p>
      </div>
      <span className="font-bold text-primary cursor-pointer">{name}</span>
      <br />
      <div className="rating rating-md mt-2">{GetRating(rating)}</div>
    </div>
  );
};

export default ReviewInfo;
