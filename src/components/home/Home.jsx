import { useLoaderData } from 'react-router-dom';
import Brand from '../../brand/Brand';

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-5">Worlds top brands</h1>
      <div className=" max-w-[1480px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {brands.map(brand => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Home;
