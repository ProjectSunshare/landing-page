import React from 'react'
import BlogCard from '../components/blog/BlogCard';
import { dummyBlogs } from '../customModules/dummyBlogs';
const Blog = () => {
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
			<div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3 max-w-[1920px] m-auto gap-y-10">
        {dummyBlogs.map((blog)=>{
          return <BlogCard profileImageUrl={blog.profileImageUrl} blogImageUrl={blog.blogImageUrl} blogTextContent={blog.blogTextContent} blogDate={blog.blogDate}/>
        })}

			</div>
		</div>
	);
}

export default Blog