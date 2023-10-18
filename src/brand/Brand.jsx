const Brand = ({ brand }) => {
  const { name, image, brand_slogan } = brand || {};
  return (
    <div className="card card-compact w-96 bg-red-400 shadow-xl">
      <figure>
        <img
          className="w-80 h-60 rounded-md p-2"
          src={image}
          alt="Brand logo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-lg font-medium">{brand_slogan}</p>
      </div>
    </div>
  );
};

export default Brand;
