import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";

const ManageProductInfo = ({ service }) => {
  const [color, setColor] = useState(false);
  const {
    img,
    name,
    description,
    minimumOrder,
    availableQuantity,
    price,
    _id,
  } = service;

  // const handleDelete = () => {
  //   const url = `http://localhost:5000/service/${_id}`;
  //   fetch(url, {
  //     method: 'DELETE',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCound > 0) {
  //         const remaining = service.filter((order) => order._id !== id);
  //         setOrders(remaining);
  //       }
  //     });
  // };

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this product?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your Product has been deleted!", {
          icon: "success",
        });
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
          method: "DELETE",
        }).then((res) => res.json());
      } else {
        // swal('Your imaginary file is safe!');
      }
    });
  };

  return (
    <div className="available-part border-2 rounded-md">
      <div className="card w-96 h-[650px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img className="w-56 p-8 rounded-xl" src={img} alt="/" />
        </figure>
        <div className="card-body text-justify">
          <h2 className="card-title">{name} </h2>
          <p>{description.slice(0, 150)}</p>
          <div className="order-minimum flex justify-between items-center">
            <p className="flex items-center ">
              <MdKeyboardArrowRight className="text-primary text-xl" /> Minimum
              Order
            </p>
            <p className="text-right">{minimumOrder}</p>
          </div>
          <div className="quantity flex justify-between items-center">
            <p className="flex items-center ">
              <MdKeyboardArrowRight className="text-primary text-xl" />{" "}
              Available Quantity
            </p>
            <p className="text-right">{availableQuantity}</p>
          </div>
          <div className="price flex justify-between items-center">
            <p className="flex items-center font-bold text-xl">
              {" "}
              <BsCurrencyDollar className="" /> {price}
            </p>
            <div>
              <p
                onClick={() => {
                  setColor(!color);
                }}
                className="text-right cursor-pointer"
              >
                <BsSuitHeart
                  className={
                    color ? "text-gray-500 text-2xl" : "text-primary text-2xl"
                  }
                />{" "}
              </p>
            </div>
          </div>
          {/* <button className="btn btn-outline">Purchase</button> */}
          <div className="purchase-btn">
            <button
              onClick={() => handleDelete(service._id)}
              className="btn-style w-full bg-red-500 mt-3"
            >
              <span></span>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductInfo;
