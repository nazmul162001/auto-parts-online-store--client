import React, { useEffect, useState } from "react";
import reviewUser from "../../../assets/images/review-user.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import "./Review.css";
import ReviewInfo from "./ReviewInfo";
import Spinner from "../../Shared/Spinner";
import { useQuery } from "react-query";

const Review = () => {
  // const reviews = [
  //   {
  //     _id: 1,
  //     name: 'John Doe',
  //     ratings: 4,
  //     img: reviewUser,
  //     description:
  //       'There Parts are 100% real. I am fully satisfy of them. Highly recommended to buy any privet parts of them here.',
  //   },
  //   {
  //     _id: 2,
  //     name: 'John Doe2',
  //     ratings: 5,
  //     img: reviewUser,
  //     description:
  //       'There Parts are 100% real. I am fully satisfy of them. Highly recommended to buy any privet parts of them here.',
  //   },
  //   {
  //     _id: 3,
  //     name: 'John Doe3',
  //     ratings: 5,
  //     img: reviewUser,
  //     description:
  //       'There Parts are 100% real. I am fully satisfy of them. Highly recommended to buy any privet parts of them here.',
  //   },
  //   {
  //     _id: 4,
  //     name: 'John Doe4',
  //     ratings: 3,
  //     img: reviewUser,
  //     description:
  //       'There Parts are 100% real. I am fully satisfy of them. Highly recommended to buy any privet parts of them here.',
  //   },
  //   {
  //     _id: 5,
  //     name: 'John Doe5',
  //     ratings: 4,
  //     img: reviewUser,
  //     description:
  //       'There Parts are 100% real. I am fully satisfy of them. Highly recommended to buy any privet parts of them here.',
  //   },
  //   {
  //     _id: 6,
  //     name: 'John Doe6',
  //     ratings: 5,
  //     img: reviewUser,
  //     description:
  //       'There Parts are 100% real. I am fully satisfy of them. Highly recommended to buy any privet parts of them here.',
  //   },
  // ];

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="user-review h-96 mb-[150px]">
      <h2 className="text-center text-5xl text-primary font-bold opacity-60">
        Customer Review
      </h2>
      <div className="h-1 bg-primary w-1/5 mx-auto opacity-60 mt-2"></div>
      <h3 className="text-center text-gray-500 text-xl font-bold">
        What Our Customer Say About Parts Online Store
      </h3>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="user-review">
          {reviews.map((review) => (
            <SwiperSlide>
              <ReviewInfo review={review} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Review;
