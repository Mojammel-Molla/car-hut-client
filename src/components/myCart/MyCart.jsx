import { useEffect, useState } from 'react';
import SingleCart from '../cartItem/SingleCart';

const MyCart = () => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch(
      `https://car-hut-server-nkl9gnsf2-mojammel-mollas-projects.vercel.app/cart`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCartItem(data);
      });
  }, []);
  return (
    <div>
      <div className=" lg:mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cartItem.map(item => (
          <SingleCart key={item._id} item={item}></SingleCart>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
