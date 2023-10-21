import React from 'react';
import TeamImg from '../../assets/about.banner.webp';
const AboutUs = () => {
  return (
    <div className="hero bg-base-100 mt-20 border-t-2 pt-3">
      <div className="hero-content flex-col lg:flex-row">
        <img src={TeamImg} className="lg:max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6">
            Welcome to our comprehensive car website, your ultimate destination
            for all things automotive. Explore an extensive range of vehicle
            makes and models, from compact cars to rugged SUVs and luxurious
            sedans. Discover in-depth reviews, expert insights, and up-to-date
            information on the latest automotive trends. Whether you are a car
            enthusiast, a buyer looking for your next ride, or simply curious
            about the world of automobiles, our website is your go-to resource
            for all things on four wheels. Start your journey with us and find
            the perfect vehicle to match your lifestyle and preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
