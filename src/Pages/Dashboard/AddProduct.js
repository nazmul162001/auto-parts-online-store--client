import React from 'react';
import swal from 'sweetalert';

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const price = e.target.price.value;
    const minimumOrder = e.target.minimumOrder.value;
    const availableQuantity = e.target.availableQuantity.value;
    const description = e.target.description.value;
    const img = e.target.imgURL.value;

    const url = `https://boiling-ridge-27693.herokuapp.com/service`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        productName,
        price,
        minimumOrder,
        availableQuantity,
        description,
        img,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        e.target.reset();
        swal('Congratulations!', 'Successfully Added Product!', 'success');
      });
  };

  return (
    <div>
      <h2 className="text-2xl text-center my-3">Add New Product</h2>
      <div className="card w-full  bg-base-100 px-12">
        <form onSubmit={handleAddProduct}>
          <div className="form-control my-2">
            <input
              type="text"
              name="productName"
              required
              placeholder="Enter Your Product Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <input
              type="number"
              name="price"
              required
              placeholder="Enter Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <input
              type="number"
              name="minimumOrder"
              required
              placeholder="Minimum Order Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <input
              type="number"
              name="availableQuantity"
              required
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <textarea
              name="description"
              placeholder="Enter Product Description"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full ">
            <input
              type="text"
              placeholder="Photo URL"
              required
              name="imgURL"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">
              <input type="submit" value="Add Product" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
