import React from "react";

const ImportantBlogCard = ({
  profileImageUrl,
  blogImageUrl,
  blogTextContent,
  blogDate,
}) => {
  return (
    <div className="blog-container mx-auto w-5/12 h-full">
      <div className="blog-content relative">
        <div className="bg-img bg-[#fe0303] w-full p-5 rounded-t-lg 2xl:w-96 h-64">
          <img
            src={blogImageUrl}
            alt=""
            className="mx-auto overflow-hidden object-fill h-full w-10/12"
          />
        </div>
        <div className="blog-header bg-[#D9D9D9] w-full py-5 h-36 pl-28 border-[#FFFFFF] border-t-4 rounded-b-lg pr-12 2xl:w-96 relative ">
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

export default ImportantBlogCard;
