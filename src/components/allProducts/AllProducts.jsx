import { useLoaderData, useParams } from 'react-router-dom';
// import Add1 from '../../assets/35869337_1635.jpg';
// import Add2 from '../../assets/34918606_8237928.jpg';
// import Add3 from '../../assets/34013032_black_friday_facebook_banner_14.jpg';
import SingleProduct from '../singleProduct/SingleProduct';
import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import SectionBanner from '../../shared/section-banner/SectionBanner';

const AllProducts = () => {
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
        {filterProduct?.map(product => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
