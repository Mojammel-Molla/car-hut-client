import Brand from '../aboutUs/brand/Brand';
import SectionTitle from './../../shared/section-title/Sectiontitle';

const AllBrands = ({ brands }) => {
  return (
    <>
      <SectionTitle title="Worlds Top Brands"></SectionTitle>
      <div className=" max-w-[1480px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {brands?.map(brand => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </>
  );
};

export default AllBrands;
