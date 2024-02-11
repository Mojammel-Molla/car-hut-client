import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
  const { name, image, brand_slogan } = brand || {};
  return (
    <Link to={`brand/${name}`}>
      <div className="card card-compact w-96 bg-[#e6edf4] shadow-xl">
        <figure>
          <img className="w-80 h-60  p-1" src={image} alt="Brand logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-lg font-medium">{brand_slogan}</p>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
