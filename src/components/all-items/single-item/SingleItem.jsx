import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const SingleItem = ({ item }) => {
  const { _id, brand, model, photo, price, category, rating } = item || {};

  const firstExample = {
    size: 30,
    value: parseFloat(rating),
    edit: false,
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
          <ReactStars {...firstExample} />,
        </div>

        <div className="card-actions flex justify-center">
          <Link to={`/product/${_id}`}>
            <button className="btn py-3 bg-[#d01818] text-white hover:bg-[#253241]">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
