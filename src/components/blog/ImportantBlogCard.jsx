import React from "react";

const ImportantBlogCard = ({
  profileImageUrl,
  blogImageUrl,
  blogTextContent,
  blogDate,
}) => {
  return (
    <div className="blog-container h-[80vh] xl:mx-auto w-full xl:h-[60vh]">
      <div className="blog-content relative">
        <div className="bg-img bg-[#FEA803] h-[60vh] w-full p-5 rounded-t-lg xl:h-[35vh] overflow-hidden">
          <img
            src={blogImageUrl}
            alt=""
            className="mx-auto object-cover w-full h-full "
          />
        </div>
        <div className="blog-header bg-[#D9D9D9] w:80 xl:w-full h-[20vh] py-5 xl:h-[15vh] pl-28 border-[#FFFFFF] border-t-4 rounded-b-lg pr-12 relative ">
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
