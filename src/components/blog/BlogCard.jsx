import React from "react";
import avatar from "../../assets/img/blog/avatar.png";
import placeholder from "../../assets/img/blog/blogPlaceholder.png";

const BlogCard = () => {
	return (
		<div className="blog-container mx-auto">
			<div className="blog-content relative">
				<div className="bg-img bg-[#FEA803] w-80 p-10 rounded-t-lg 2xl:w-96">
					<img src={placeholder} alt="" className="mx-auto" />
				</div>
				<div className="avatar">
					<img
						src={avatar}
						className="rounded-full border-8 border-[#D9D9D9] absolute left-5 bottom-[70px]"
						alt="User"
					/>
				</div>
				<div className="blog-header bg-[#D9D9D9] w-80 py-5 pl-28 border-[#FFFFFF] border-t-4 rounded-b-lg pr-12 2xl:w-96">
					<h3 className="text-xl">Lorem Ipsum Dolor Sit Amet</h3>
					<p className="text-xs">October 1, 2022</p>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
