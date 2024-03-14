import { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useAxios from '../../hooks/useAxios';
import SectionTitle from '../../shared/section-title/SectionTitle';

const CardDetails = () => {
  const product = useLoaderData();

  // const axios = useAxios()
  // useEffect(() => {
  //   axios.get(`/`)
  // },[axios])

  const { brand, model, photo, price, category, rating, description } =
    product || {};

  const { user } = useContext(AuthContext);
  const email = user.email;
  const userData = {
    brand,
    model,
    photo,
    price,
    category,
    rating,
    description,
    email,
  };

  const handleCartData = () => {
    fetch(
      'https://car-hut-server-gqfbpbiz9-mojammel-mollas-projects.vercel.app/cart',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert('Car has been selected');
      });
  };

  const handleAddReview = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const comment = form.comment.value;

    const newReview = { name, comment };
    console.log(newReview);
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newReview),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('Your review has been posted');
          form.rest();
        }
      });
  };
  return (
    <div className="flex justify-between gap-5 w-full">
      <div className="card w-1/3 mx-auto mt-20 bg-base-100 shadow-xl bottom-2">
        <figure className="w-full">
          <img className="h-60 w-96" src={photo} />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className=" text-xl">
              Brand:<span className=" text-2xl font-semibold">{brand}</span>
            </h2>
            <h2 className="">
              Model: <span className=" font-bold">{model}</span>
            </h2>
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="">
                Price:$<span className="font-medium">{price}</span>
              </h2>
              <p className="">
                Rating: <span className="font-medium">{rating}</span>
              </p>
            </div>
            <h2 className="">
              Type:<span className=" font-medium">{category}</span>
            </h2>
          </div>
          <p className=" font-normal">{description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleCartData}
              className="btn bg-[#d01818] text-white hover:bg-[#253241]"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <SectionTitle title="Tell Your Experience"></SectionTitle>
        <form onSubmit={handleAddReview} className="w-2/4 mx-auto ">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Review</span>
            </label>
            <textarea
              name="comment"
              className="textarea textarea-bordered"
              placeholder="Write your comment here"
            ></textarea>
          </div>
          <div className="form-control  mt-6">
            <button className="btn bg-[#d01818] text-white hover:bg-[#253241] ">
              Post review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardDetails;
