import { useState } from 'react';
import Swal from 'sweetalert2';

const SingleCart = ({ item }) => {
  const [cartItem, setCartItem] = useState(item);
  const { _id, brand, model, photo, price, category, rating } = cartItem || {};

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(
          `https://car-hut-server-gqfbpbiz9-mojammel-mollas-projects.vercel.app/cart/${_id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              );
            }
            setCartItem(data);
          });
      }
    });
  };
  return (
    <div>
      <div className="card w-96 mx-auto bg-base-100 shadow-xl bottom-2">
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

            <p className="ml-20">{rating},</p>
          </div>

          <div className="card-actions flex justify-center">
            <button
              onClick={() => {
                handleDelete(_id);
              }}
              className="btn bg-[#d01818] text-white hover:bg-[#253241]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
