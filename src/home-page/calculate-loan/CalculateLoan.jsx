import { useState } from 'react';
import LoanBanner from '../../assets/loan-banner.jpg';

const CalculateLoan = () => {
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [totalPayment, setTotalPayment] = useState('');
  const handleCalculate = e => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const interestRate = form.rate.value;
    const year = form.year.value;
    const downPayment = form.payment.value;
    console.log(price, interestRate, year, downPayment);

    const interest = price * (interestRate / 100);
    const total = parseInt(price) + parseInt(interest);
    const monthly = total / (year * 12);
    setTotalInterest(interest);
    setTotalPayment(total);
    setMonthlyPayment(monthly.toFixed(2));
  };
  return (
    <div className="lg:flex  w-full lg:h-[60vh] items-center">
      <div className="lg:w-1/2 my-5">
        <h1 className="text-center text--2xl md:text-3xl uppercase font-bold my-5">
          Auto <span className="text-red-600">Loan</span> Calculator
        </h1>

        <form
          onSubmit={handleCalculate}
          className="card-body mx-auto md:w-3/4  h-96 rounded-xl shadow-2xl"
        >
          <div className="flex gap-5 ">
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text font-semibold">Price:</span>
              </label>
              <input
                name="price"
                type="text"
                placeholder="($)"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text font-semibold">Interest Rate:</span>
              </label>
              <input
                name="rate"
                type="text"
                placeholder="(%)"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text font-semibold">Loan Term</span>
              </label>
              <input
                name="year"
                type="text"
                placeholder="Yearly"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text font-semibold">Down Payment</span>
              </label>
              <input
                name="payment"
                type="text"
                placeholder="Just Pay"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#d01818] text-white hover:bg-[#253241]">
              Calculate
            </button>
          </div>
          <div className="md:flex  font-medium">
            <p>Monthly Payment: ${monthlyPayment}</p>
            <p>Total Interest: ${totalInterest}</p>
            <p>Total Payment:${totalPayment}</p>
          </div>
        </form>
      </div>
      <div className="lg:w-1/2">
        <img className="w-full rounded-md" src={LoanBanner} alt="" />
      </div>
    </div>
  );
};

export default CalculateLoan;
