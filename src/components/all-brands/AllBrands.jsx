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
      <SectionTitle title="Worlds Top Brands"></SectionTitle>
      <div className=" max-w-[1480px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {brands?.map(brand => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </>
  );
};

export default AllBrands;
