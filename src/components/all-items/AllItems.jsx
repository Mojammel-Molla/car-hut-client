import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import SectionBanner from '../../shared/section-banner/SectionBanner';
import CarSorting from './car-sorting/CarSorting';
import SingleItem from './single-item/SingleItem';

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
      <CarSorting></CarSorting>
      <div className="grid gap-5 lg:ml-12 md:grid-cols-2 lg:grid-cols-4 mt-10 mx-auto ">
        {filterProduct?.map(item => (
          <SingleItem key={item._id} item={item}></SingleItem>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
