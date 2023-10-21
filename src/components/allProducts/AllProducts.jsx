import { useLoaderData, useParams } from 'react-router-dom';
import Add1 from '../../assets/35869337_1635.jpg';
import Add2 from '../../assets/34918606_8237928.jpg';
import Add3 from '../../assets/34013032_black_friday_facebook_banner_14.jpg';
import SingleProduct from '../singleProduct/SingleProduct';
import { useEffect, useState } from 'react';

const AllProducts = () => {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const { brand } = useParams();
  const filterProduct = loadedProducts.filter(
    product => product.brand == brand
  );
  useEffect(() => {
    fetch(
      `https://car-hut-server-nkl9gnsf2-mojammel-mollas-projects.vercel.app/products`
    )
      .then(res => res.json())
      .then(data => {
        setLoadedProducts(data);
        console.log(data);
      });
  }, [brand]);

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={Add1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={Add2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={Add3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="grid gap-3 lg:ml-12 md:grid-cols-2 lg:grid-cols-4 mt-10 mx-auto">
        {filterProduct?.map(product => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
