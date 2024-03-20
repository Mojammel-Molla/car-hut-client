const CarSorting = () => {
  const handleSort = e => {
    e.preventDefault();
    const carType = e.target.carType.value;
    const priceRange = e.target.range.value;
    console.log(carType, priceRange);
  };
  return (
    <div className="h-64 max-w-4xl mx-auto ">
      <form
        onSubmit={handleSort}
        className=" shadow-2xl rounded-md mt-5 p-10 flex gap-3"
        action=" "
      >
        <label className="form-control w-60 max-w-xs">
          <p className="label">
            <span className="label-text">Car Type</span>
          </p>
          <select name="carType" className="select select-bordered">
            <option disabled>Pick one</option>
            <option>Midsize sedan</option>
            <option>Compact SUV</option>
            <option>Compact Car</option>
            <option>Three-Row SUV</option>
          </select>
        </label>
        <label className="form-control w-60 max-w-xs">
          <p className="label">
            <span className="label-text">Price</span>
          </p>
          <select name="range" className="select select-bordered">
            <option disabled>Pick one</option>
            <option>$10,000 - $50,000</option>
            <option>$50,000 - $1,00,000</option>
            <option>$1,00,000 - $2,00,000</option>
            <option>$2,00,000 - $3,00,000</option>
          </select>
        </label>
        <label className="form-control w-60 max-w-xs">
          <button
            type="submit"
            className="rounded-md mt-9 py-3 font-semibold  text-white bg-red-600 hover:bg-slate-600"
          >
            Search
          </button>
        </label>
      </form>
    </div>
  );
};

export default CarSorting;
