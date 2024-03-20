const ProductStatus = () => {
  return (
    <div className="lg:mt-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-5">
        <div className="p-5 text-center h-36 shadow-2xl">
          <p className="font-bold pt-5">Vehicles Stock</p>
          <h1 className="text-3xl font-bold">3865+</h1>
        </div>
        <div className="p-5 text-center h-36 shadow-2xl">
          <p className="font-bold pt-5">Dealers Served</p>
          <h1 className="text-3xl font-bold">127+</h1>
        </div>
        <div className="p-5 text-center h-36 shadow-2xl">
          <p className="font-bold pt-5">Happy Customers</p>
          <h1 className="text-3xl font-bold">6570+</h1>
        </div>
        <div className="p-5 text-center h-36 shadow-2xl">
          <p className="font-bold pt-5">Vehicles On Sale</p>
          <h1 className="text-3xl font-bold">1454 +</h1>
        </div>
      </div>
      <div className="bg-slate-700 p-3 h-[50vh] mt-5">
        <div className="md:flex gap-10 justify-evenly text-white items-center borer-2 h-full">
          <div className="md:w-1/2 lg:max-w-lg space-y-3">
            <h2 className="text-xl font-bold md:text-4xl my-2">
              Book your Free Car Inspection
            </h2>
            <p>
              Schedule your complimentary car inspection today and ensure your
              vehicles performance and safety are in top condition, courtesy of
              our expert team.
            </p>
          </div>
          <div className="flex gap-5 mt-2">
            <button className=" px-4 py-2 font-semibold text-white bg-red-600 hover:bg-slate-600">
              Get Registered
            </button>
            <div>
              <p>Call Us For Booking Vehicles</p>
              <p>+1 (755) 302-8549</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStatus;
