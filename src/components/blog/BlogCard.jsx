import React from "react";

const BlogCard = ({
  profileImageUrl,
  blogImageUrl,
  blogTextContent,
  blogDate,
}) => {
  return (
    <div className="blog-container mx-auto">
      <div className="blog-content relative">
        <div className="bg-img bg-[#FEA803] w-80 p-5 rounded-t-lg 2xl:w-96 h-64">
          <img
            src={blogImageUrl}
            alt=""
            className="mx-auto overflow-hidden object-fill h-52"
          />
        </div>
        <div className="blog-header bg-[#D9D9D9] w-80 py-5 pl-28 border-[#FFFFFF] border-t-4 rounded-b-lg pr-12 2xl:w-96 relative">
          <div className="avatar absolute -top-7 left-2">
            <img
              src={profileImageUrl}
              className="rounded-full border-8 border-[#D9D9D9] bottom-[70px] w-20 h-20"
              alt="User"
            />
          </div>
          <h3 className="text-xl">{blogTextContent}</h3>
          <p className="text-xs">{blogDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
