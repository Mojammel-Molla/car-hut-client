import Swal from 'sweetalert2';
import SectionBanner from '../../shared/section-banner/SectionBanner';

const AddItems = () => {
  const handleAddItems = e => {
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

    fetch(
      'https://car-hut-server-gqfbpbiz9-mojammel-mollas-projects.vercel.app/products',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        form.reset();
        if (data.insertedId > 0) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your product has been added',
            showConfirmButton: false,
          });
        }
      });
  };
  return (
    <div>
      <SectionBanner title="Dashboard" subTitle="Add Items"></SectionBanner>
      <h1 className="text-center text-2xl uppercase underline font-semibold mt-5">
        Insert here car details
      </h1>

      <form onSubmit={handleAddItems} className="card-body mx-auto w-2/4">
        <div className="flex gap-5 ">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Brand:</span>
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
              <span className="label-text">Model:</span>
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
              <span className="label-text">Photo:</span>
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
              <span className="label-text">Price:</span>
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
              <span className="label-text">Category:</span>
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
              <span className="label-text">Rating:</span>
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
            <span className="label-text">Description:</span>
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
          <button className="btn bg-[#d01818] text-white hover:bg-[#253241]">
            Add New Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
