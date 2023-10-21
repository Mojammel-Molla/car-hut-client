import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const CardDetails = () => {
  const product = useLoaderData();
  const { brand, model, photo, price, category, rating, description } =
    product || {};

  const { user } = useContext(AuthContext);
  const email = user.email;
  const userData = { ...product, email };

  const handleCartData = () => {
    fetch(
      'https://car-hut-server-nkl9gnsf2-mojammel-mollas-projects.vercel.app/cart',
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
      });
  };

  return (
    <div>
      <div className="card w-1/4 mx-auto mt-20 bg-base-100 shadow-xl bottom-2">
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
            <button onClick={handleCartData} className="btn btn-primary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
