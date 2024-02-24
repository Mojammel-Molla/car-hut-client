import { useEffect, useState } from 'react';
import SectionTitle from './../../shared/section-title/SectionTitle';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  // const {
  //   blog_title,
  //   blog_description,
  //   blog_image,
  //   publish_date,
  //   writer_name,
  //   writer_image,
  // } = blog || {};
  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);
  return (
    <div className="h-[55vh] lg:mt-20">
      <SectionTitle title="Our Blogs"></SectionTitle>
      <div className="grid  md:grid-cols-2 md:gap-5 my-5 lg:my-10  md:mx-10">
        {blogs.slice(0, 2).map(blog => (
          <div key={blog._id} className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                className="rounded-lg"
                src={blog.blog_image}
                alt="Car Image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog.blog_title}</h2>
              <p className="py-6">{blog?.blog_description.slice(0, 100)}...</p>
              <div className="flex justify-between">
                <div>
                  <img
                    className="h-10 w-10 rounded-full ml-4"
                    src={blog.writer_image}
                    alt="Car Image"
                  />
                  <p>
                    Writer :{' '}
                    <span className="font-bold">{blog.writer_name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full text-center">
        <Link to="/blog">
          <button className="btn bg-orange-800 text-white hover:bg-orange-500">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
