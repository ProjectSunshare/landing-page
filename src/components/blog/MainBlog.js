import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyBlogs } from "../../customModules/dummyBlogs.js";
import blogs from "../../customModules/blogs.json";
const MainBlog = ({}) => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const fakeFetchOfBlog = async (id) => {
      const newBlog = Object.values(blogs).find((blog) => {
        if (parseInt(blog.id) === parseInt(id)) {
          return {
            ...blog,
          };
        }
      });

      return {
        ...newBlog,
      };
    };

    fakeFetchOfBlog(id).then((newBlog) => {
      console.log(newBlog);
      setBlog(newBlog);
    });
  }, []);
  return (
    <div>
      <div className="flex  w-full bg-[#FEA803] items-center justify-center max-h-[70vh] overflow-hidden">
        {blog.blogImageUrls && (
          <img src={`${blog.blogImageUrls[0]}`} className="w-[100%]" />
        )}
      </div>

      <div className="p-11">
        <div className="small-title text-center">
          <div className="small-title-container">
            <div className="left-dash text-[#FEA803] px-10 pt-1 inline">-</div>
            <h5 className="text-2xl text-[#FEA803] inline">BLOG</h5>
            <div className="right-dash text-[#FEA803] px-10 inline">-</div>
          </div>
        </div>
        <h2>BLOG TITLE</h2>
      </div>

      <div className="bg-[#D9D9D9] ">
        <p
          aria-label="Blog text content"
          className="w-full text-center p-11 min-h-[40vh]">
          {blog.blogTextContent}
        </p>
      </div>
      <div className="flex gap-8 overflow-x-scroll p-11">
        {blog.blogImageUrls &&
          blog.blogImageUrls.map((imageLink) => {
            return (
              <img src={imageLink} className="max-w[60vw] md:max-w-[40vw]" />
            );
          })}
      </div>
    </div>
  );
};
export default MainBlog;
