import { useEffect } from 'react';
import { useState } from 'react';
import Blog from './Blog';
import SectionBanner from '../../shared/section-banner/SectionBanner';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);
  console.log(blogs, isShow);
  return (
    <div>
      <SectionBanner title="Home" subTitle="Blogs"></SectionBanner>
      {blogs.map(blog => (
        <Blog
          key={blog._id}
          blog={blog}
          isShow={isShow}
          setIsShow={setIsShow}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
