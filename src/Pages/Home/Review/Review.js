import React from 'react';
import ReviewInfo from './ReviewInfo';
import reviewUser from '../../../assets/images/review-user.png';

const Review = () => {


  const reviews = [
    {
      _id: 1,
      name: "John Doe",
      ratings: 4,
      img: reviewUser,
      description: 'There Parts are 100% real. I am fully satisfy of them. Highly recommended to buy any privet parts of them here.'
    },
    {
      _id: 2,
      name: "John Doe2",
      ratings: 5,
      img: reviewUser,
      description: 'There Parts are 100% real. I am fully satisfy of them. Highly recommended to buy any privet parts of them here.'
    },
    {
      _id: 3,
      name: "John Doe3",
      ratings: 5,
      img: reviewUser,
      description: 'There Parts are 100% real. I am fully satisfy of them. Highly recommended to buy any privet parts of them here.'
    },
    {
      _id: 4,
      name: "John Doe4",
      ratings: 3,
      img: reviewUser,
      description: 'There Parts are 100% real. I am fully satisfy of them. Highly recommended to buy any privet parts of them here.'
    },
    {
      _id: 5,
      name: "John Doe5",
      ratings: 4,
      img: reviewUser,
      description: 'There Parts are 100% real. I am fully satisfy of them. Highly recommended to buy any privet parts of them here.'
    },
    {
      _id: 6,
      name: "John Doe6",
      ratings: 5,
      img: reviewUser,
      description: 'There Parts are 100% real. I am fully satisfy of them. Highly recommended to buy any privet parts of them here.'
    },
  ]
  
  return (
    <section className="review">
      {
        reviews.map(review => <ReviewInfo 
          key={review._id}
          review={review}
        />)
      }
    </section>
  );
};

export default Review;
