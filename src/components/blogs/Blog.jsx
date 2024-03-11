const Blog = ({ blog, isShow, setIsShow }) => {
  const {
    blog_title,
    blog_description,
    blog_image,
    publish_date,
    writer_name,
    writer_image,
  } = blog || {};
  return (
    <div className="hero min-h-[80vh] bg-base-100 border-b-2">
      <div className="hero-content flex-col lg:flex-row">
        <img src={blog_image} className="max-w-lg rounded-lg shadow-2xl" />
        <div className="pt-10">
          <h1 className="text-3xl font-bold">{blog_title}</h1>
          {isShow ? (
            <p className="py-6">{blog_description}</p>
          ) : (
            <p className="py-6">{blog_description.slice(0, 200)}</p>
          )}
          <button
            onClick={() => setIsShow(!isShow)}
            className="mb-5 p-5 text-[#d01818] font-bold"
          >
            {isShow ? 'See Less...' : 'See More...'}
          </button>
          <div className="flex justify-between">
            <div>
              <img
                className="h-10 w-10 rounded-full ml-4"
                src={writer_image}
                alt="Car Image"
              />
              <p>
                Writer : <span className="font-bold">{writer_name}</span>
              </p>
            </div>
            <p>
              Date: <span className="font-bold">{publish_date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
