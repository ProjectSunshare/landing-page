import React, { useEffect, useState } from "react";
import BlogCard from "../components/blog/BlogCard";
import { dummyBlogs } from "../customModules/dummyBlogs";
import ImportantBlogCard from "../components/blog/ImportantBlogCard";
const Blog = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindowChange = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowChange);
    return () => {
      window.removeEventListener("resize", handleWindowChange);
    };
  });

  return (
    <div className="w-full my-36">
      <div className="small-title text-center">
        <div className="small-title-container">
          <div className="left-dash text-[#FEA803] px-10 pt-1 inline">-</div>
          <h5 className="text-2xl text-[#FEA803] inline">BLOG</h5>
          <div className="right-dash text-[#FEA803] px-10 inline">-</div>
        </div>
      </div>
      <div className="large-title pb-20">
        <h2>Thought Starters</h2>
      </div>
      <div className="important-blogs grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3 max-w-[1920px] m-auto gap-y-10"></div>
      <div className="flex gap-1 flex-wrap">
        {dummyBlogs.slice(0, 2).map((blog) => {
          console.log(windowWidth);
          if (windowWidth > 768) {
            return (
              <ImportantBlogCard
                key={blog.id}
                profileImageUrl={blog.profileImageUrl}
                blogImageUrl={blog.blogImageUrl}
                blogTextContent={blog.blogTextContent}
                blogDate={blog.blogDate}
              />
            );
          }
          return (
            <BlogCard
              key={blog.id}
              profileImageUrl={blog.profileImageUrl}
              blogImageUrl={blog.blogImageUrl}
              blogTextContent={blog.blogTextContent}
              blogDate={blog.blogDate}
            />
          );
        })}

        {dummyBlogs.slice(2, dummyBlogs.length - 1).map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              profileImageUrl={blog.profileImageUrl}
              blogImageUrl={blog.blogImageUrl}
              blogTextContent={blog.blogTextContent}
              blogDate={blog.blogDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
