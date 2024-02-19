import { useEffect } from 'react';
import { useState } from 'react';
import Blog from './Blog';

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
