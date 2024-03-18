import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import SectionTitle from '../../shared/section-title/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import UserImage from '../../assets/userImage.jpg';
const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div className="my-16">
      <SectionTitle title="Testimonials"></SectionTitle>

      <div className="divider"></div>
      <div className=" max-w-[1440px] h-96 mx-auto">
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          {reviews.length > 0 &&
            reviews?.map(review => (
              <SwiperSlide key={review?._id}>
                <div className="card md:w-1/2 mx-auto h-60 my-10 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex gap-3">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={UserImage}
                        alt=""
                      />
                      <h2 className="card-title ">{review?.name}</h2>
                    </div>
                    <p>{review?.comment}</p>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
