import { useLoaderData, useParams } from 'react-router-dom';

import SingleItem from '../single-item/SingleItem';
import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import SectionBanner from '../../shared/section-banner/SectionBanner';

const AllItems = () => {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const axios = useAxios();
  const { brand } = useParams();
  const filterProduct = loadedProducts.filter(
    product => product.brand == brand
  );

  useEffect(() => {
    axios.get(`car-brand?brand=${brand}}`).then(res => {
      setLoadedProducts(res.data);
    });
  }, [axios, brand]);

  return (
    <div>
      <SectionBanner title="Cars" subTitle="Details"></SectionBanner>
      <div className="grid gap-3 lg:ml-12 md:grid-cols-2 lg:grid-cols-4 mt-10 mx-auto">
        {filterProduct?.map(item => (
          <SingleItem key={item._id} item={item}></SingleItem>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
