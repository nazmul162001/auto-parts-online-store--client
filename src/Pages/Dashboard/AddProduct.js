import React from 'react';

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const price = e.target.price.value;
    const minimumOrder = e.target.minimumOrder.value;
    const availableQuantity = e.target.availableQuantity.value;
    const description = e.target.description.value;
    const img = e.target.imgURL.value;

    const url = `http://localhost:5000/service`;
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
        alert('Item Successfully added');
      });
  };

  return (
    <div>
      <h2 className="text-2xl text-center my-3">Add New Product</h2>
      <div class="card w-full  bg-base-100 px-12">
        <form onSubmit={handleAddProduct}>
          <div class="form-control my-2">
            <input
              type="text"
              name="productName"
              required
              placeholder="Enter Your Product Name"
              class="input input-bordered"
            />
          </div>
          <div class="form-control my-2">
            <input
              type="number"
              name="price"
              required
              placeholder="Enter Price"
              class="input input-bordered"
            />
          </div>
          <div class="form-control my-2">
            <input
              type="number"
              name="minimumOrder"
              required
              placeholder="Minimum Order Quantity"
              class="input input-bordered"
            />
          </div>
          <div class="form-control my-2">
            <input
              type="number"
              name="availableQuantity"
              required
              placeholder="Available Quantity"
              class="input input-bordered"
            />
          </div>
          <div class="form-control my-2">
            <textarea
              name="description"
              placeholder="Enter Product Description"
              class="input input-bordered"
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

          <div class="form-control mt-6">
            <button class="btn btn-primary">
              <input type="submit" value="Add Product" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
