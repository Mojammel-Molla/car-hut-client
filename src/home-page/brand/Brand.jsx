import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
  const { name, image, brand_slogan } = brand || {};
  return (
    <Link to={`brand/${name}`}>
      <div className=" w-96 mx-auto  bg-[#e6edf4] shadow-xl hover:text-white  hover:bg-[#d01818]">
        <figure>
          <img className="w-full h-60 mx-auto  " src={image} alt="Brand logo" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-lg font-medium">{brand_slogan}</p>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
