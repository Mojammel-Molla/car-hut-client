import { useEffect, useState } from 'react';
import Brand from '../../home-page/brand/Brand';
import useAxios from '../../hooks/useAxios';
import SectionTitle from '../../shared/section-title/SectionTitle';

const AllBrands = () => {
  const axios = useAxios();
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axios.get('/brand-name').then(res => {
      setBrands(res.data);
    });
  }, [axios]);
  return (
    <>
      <SectionTitle></SectionTitle>
      <h1 className="sm:text-2xl md:text-4xl text-center font-bold mb-10 ">
        Our All <span className="text-red-600">Brands</span>
      </h1>
      <div className=" max-w-[1480px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {brands?.map(brand => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </>
  );
};

export default AllBrands;
