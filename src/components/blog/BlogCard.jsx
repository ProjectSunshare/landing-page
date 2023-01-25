import React from "react";

const BlogCard = ({
  profileImageUrl,
  blogImageUrl,
  blogTextContent,
  blogDate,
}) => {
  return (
    <div className="blog-container mx-auto w-full">
      <div className="blog-content relative ">
        <div className="bg-img bg-[#FEA803] h-[60vh] w-full p-5 rounded-t-lg xl:h-[30vh] ">
          <img
            src={blogImageUrl}
            alt=""
            className="mx-auto object-cover w-full h-full"
          />
        </div>
        <div className="blog-header bg-[#D9D9D9] h-[20vh] py-5 pl-28 border-[#FFFFFF] border-t-4 rounded-b-lg pr-12 w-full relative dark:bg-[#00061C] ">
          <div className="avatar absolute -top-7 left-2 ">
            <img
              src={profileImageUrl}
              className="rounded-full border-8 border-[#D9D9D9] bottom-[70px] w-full h-20 "
              alt="User"
            />
          </div>
          <h3 className="text-[2.4vh]">{blogTextContent}</h3>
          <p className="text-[2vh]">{blogDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
