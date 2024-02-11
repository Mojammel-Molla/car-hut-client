import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import SectionTitle from '../../shared/section-title/SectionTitle';

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  const handleReview = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const comment = form.comment.value;

    const newReview = { name, comment };
    console.log(newReview);
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newReview),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('Your review has been posted');
          form.rest();
        }
      });
  };
  return (
    <div>
      <SectionTitle title="Testimonials"></SectionTitle>
      {/* <div>
        <h1 className="lg:text-4xl font-bold text-center my-5">
          Client Reviews
        </h1>
        <form onSubmit={handleReview} className="w-2/4 mx-auto">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Review</span>
            </label>
            <textarea
              name="comment"
              className="textarea textarea-bordered"
              placeholder="Write your comment here"
            ></textarea>
          </div>
          <div className="form-control  mt-6">
            <button className="btn text-white btn-primary ">Post review</button>
          </div>
        </form>
      </div> */}
      <div className="divider"></div>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2">
        {reviews.length > 0 &&
          reviews?.map(review => (
            // <p key={review?.review_id}>{review?.client_name}</p>
            <div key={review?._id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{review?.name}</h2>
                <p>{review?.comment}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
