import BlogCard from "../components/blog/BlogCard";
import { dummyBlogs } from "../customModules/dummyBlogs";
import ImportantBlogCard from "../components/blog/ImportantBlogCard";

const Blog = () => {
  return (
    <div className="w-full py-36 dark:bg-[#0D1F31] dark:text-white">
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
      <div>
        <div className="xl:grid xl:grid-cols-2 flex flex-wrap mr-10 ml-10 gap-5">
          {dummyBlogs.slice(0, 2).map((blog) => {
            return (
              <ImportantBlogCard
                key={blog.id}
                profileImageUrl={blog.profileImageUrl}
                blogImageUrl={blog.blogImageUrl}
                blogTextContent={blog.blogTextContent}
                blogDate={blog.blogDate}
              />
            );
          })}
        </div>
        <div className="xl:grid xl:grid-cols-3  flex gap-5 flex-wrap mr-10 ml-10 ">
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
    </div>
  );
};

export default Blog;
