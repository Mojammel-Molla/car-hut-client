import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const SingleProduct = ({ product }) => {
  const { _id, brand, model, photo, price, category, rating } = product || {};

  const firstExample = {
    size: 30,
    value: 5,
    edit: true,
    isHalf: true,
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl bottom-2">
      <figure>
        <img className="h-60 w-96" src={photo} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">{brand}</h2>
        <div className="flex justify-between">
          <p>
            Type: <span className="font-semibold">{category}</span>
          </p>
          <p>Model: {model}</p>
        </div>
        <div className="flex justify-between">
          <p>Price:${price}</p>

          <p className="ml-20">
            <ReactStars {...firstExample} />,
          </p>
        </div>

        <div className="card-actions flex justify-between">
          <Link to={`/product/${_id}`}>
            <button className="badge py-3 badge-outline">View Detail</button>
          </Link>
          <Link to={`/updateProduct/${_id}`}>
            <button className="badge py-3 badge-outline">Update Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
