import { useEffect, useState } from 'react';
import SingleCart from '../cartItem/SingleCart';
import SectionBanner from '../../shared/section-banner/SectionBanner';

const MyCart = () => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch(
      `https://car-hut-server-gqfbpbiz9-mojammel-mollas-projects.vercel.app/cart`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCartItem(data);
      });
  }, []);
  return (
    <div>
      <SectionBanner title="Home" subTitle="Wish-list"></SectionBanner>
      <div className=" lg:mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-[1620px]">
        {cartItem.map(item => (
          <SingleCart key={item._id} item={item}></SingleCart>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
