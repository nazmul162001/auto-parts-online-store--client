import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";
import Footer from "../Shared/Footer";
import formBg from "../../assets/images/formBg.jpg";

const Purchase = () => {
  const [err, setErr] = useState("");
  const [customQuantity, setCustomQuantity] = useState(0);

  const [user] = useAuthState(auth);
  const [service, setService] = useState({});
  const {
    productName,
    img,
    description,
    _id,
    price,
    minimumOrder,
    availableQuantity,
  } = service;

  const [productQuantity, setProductQuantity] = useState(minimumOrder);
  useEffect(() => {
    setProductQuantity(minimumOrder);
  }, [minimumOrder]);

  const { id } = useParams();
  // console.log(quantity);

  // console.log(quantity);

  const url = `http://localhost:5000/service/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setService(data));

  // purchase
  const handlePurchase = (e) => {
    e.preventDefault();
    const productId = e.target.productId.value;
    const name = e.target.name.value;
    const productName = e.target.productName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const quantity = e.target.quantity.value;
    const location = e.target.location.value;
    const price = e.target.price.value;

    // console.log(name, email, phone, address, quantity, location, productId);

    const order = {
      productId: productId,
      name: name,
      email: email,
      phone: phone,
      address: address,
      quantity: quantity,
      location: location,
      productName: productName,
      price: price,
      status: "pending",
    };

    // post method for insert user order
    // post-steps(3)
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        e.target.reset();
        swal(
          "Congratulations!",
          "Successfully Purchase this product!",
          "success"
        );
      });
  };

  useEffect(() => {
    if (customQuantity === "") {
      setErr("Please input Your Quantity");
      return;
    }
    if (customQuantity > parseInt(availableQuantity)) {
      setErr("Order Quantitiy can not bigger than available quantity");
    } else if (customQuantity < parseInt(minimumOrder)) {
      setErr("Order Quantity can not smaller than minimum order");
    } else {
      setErr("");
    }
  }, [customQuantity]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setProductQuantity(customQuantity);
    swal("Good job!", "You clicked the button!", "success");
  };

  return (
    <section className="purchase w-full">
      <h1 className="text-center text-gray-500 opacity-60 text-5xl mt-12 font-bold">
        WellCome To Purchase Page
      </h1>
      <h3 className="text-center text-gray-500 text-xl font-bold">
        Here is the Detail information Of the item
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center my-28 shadow-2xl border-[1px] border-opacity-30 border-gray-500 mx-12">
        <div className="product-image flex items-center justify-center">
          <img src={img} alt="Album" />
        </div>
        <div className="card-body text-left">
          <h4 className="text-xl">
            {" "}
            <strong className="text-gray-500">Product ID:</strong> {_id}{" "}
          </h4>
          <h4 className="text-xl">
            {" "}
            <strong className="text-gray-500">Name:</strong> {productName}{" "}
          </h4>
          <h4 className="text-xl">
            {" "}
            <strong className="text-gray-500">Price: $</strong> {price}{" "}
          </h4>
          <h4 className="text-xl">
            {" "}
            <strong className="text-gray-500">
              Minimum Order Quantity:
            </strong>{" "}
            {minimumOrder}{" "}
          </h4>
          <h4 className="text-xl">
            {" "}
            <strong className="text-gray-500">Available Quantity:</strong>{" "}
            {availableQuantity}{" "}
          </h4>
          <h4 className="text-xl text-gray-500">
            {" "}
            <strong className="text-gray-500">Product Description:</strong>{" "}
            {description}{" "}
          </h4>
        </div>
      </div>

      {/* handle quantity  */}

      <form className="pl-12 mb-8">
        <label htmlFor="quantityUpdate">Set Your Quantity Here</label>
        <br />
        <input
          type="number"
          onChange={(e) => setCustomQuantity(e.target.value)}
          value={customQuantity}
          placeholder="Enter Your quantity"
          name="updateQuantity"
          class="input input-bordered input-info w-full max-w-xs"
        />
        <br />
        <p className="text-red-500 italic text-lg"> {err} </p>
        <input
          onClick={handleUpdate}
          className={
            err || customQuantity === 0
              ? "disable pointer-events-none hover:bg-transparent border-4 px-5 py-2 my-2 cursor-not-allowed opacity-50"
              : "btn btn-outline btn-primary my-2"
          }
          type="submit"
          value="Update Quantity"
        />
      </form>

      <div className="form">
        <h2 className="text-center text-gray-500 text-5xl">
          Purchase This Item
        </h2>
        <p className="text-center text-xl text-gray-500">
          Fill Up the form below to confirm your order
        </p>
        <div className="purchase-form mt-5">
          <div
            style={{
              background: `url(${formBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
            }}
            className="hero py-28"
          >
            <div className="card w-4/5 md:w-2/3 shadow-2xl glass">
              <form onSubmit={handlePurchase} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-white label-text">Product ID</span>
                  </label>
                  <input
                    type="text"
                    name="productId"
                    value={_id}
                    className="input input-bordered"
                    disabled
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-white label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user.displayName}
                    className="input input-bordered"
                    disabled
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-white label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    className="input input-bordered"
                    disabled
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-white label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={productName}
                    className="input input-bordered"
                    disabled
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-white label-text">Price:</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={price}
                    disabled
                    placeholder="Enter Your Quantity"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-white label-text">Quantity:</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    Value={productQuantity}
                    disabled
                    placeholder="Enter Your Quantity"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-white label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="Enter Your Address"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-white label-text">Phone No:</span>
                  </label>
                  <input
                    type="number"
                    required
                    name="phone"
                    placeholder="Enter Your Phone Number"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-white label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="location"
                    placeholder="Enter Your Exact Location"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={err ? true : false}
                    className="btn btn-primary"
                    type="submit"
                    value="Purchase"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Purchase;
