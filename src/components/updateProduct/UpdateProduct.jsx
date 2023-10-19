const UpdateProduct = () => {
  const handleUpdateProduct = e => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const model = form.model.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const newProduct = {
      brand,
      model,
      photo,
      price,
      category,
      rating,
      description,
    };
    console.log(newProduct);
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-5">Update Products</h1>
      <form onSubmit={handleUpdateProduct} className="card-body mx-auto w-2/4">
        <div className="flex gap-5 ">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Update Brand:</span>
            </label>
            <input
              name="brand"
              type="text"
              placeholder="Brand name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Update Model:</span>
            </label>
            <input
              name="model"
              type="text"
              placeholder="Model no :"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Update Photo:</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Product photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Update Price:</span>
            </label>
            <input
              name="price"
              type="text"
              placeholder="Price of product"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Update Category:</span>
            </label>
            <input
              name="category"
              type="text"
              placeholder="Type of product"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Update Rating:</span>
            </label>
            <input
              name="rating"
              type="text"
              placeholder="Rating of product"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control w-4/4">
          <label className="label">
            <span className="label-text">Update Description:</span>
          </label>
          <input
            name="description"
            type="text"
            placeholder="Short description"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary ">Update Product</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
