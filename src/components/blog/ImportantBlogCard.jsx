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
        <div className="bg-img bg-[#FEA803] h-[60vh] w-full p-5 rounded-t-lg xl:h-[35vh] overflow-hidden ">
          <img
            src={blogImageUrl}
            alt=""
            className="mx-auto object-cover w-full h-full "
          />
        </div>
        <div className="blog-header bg-[#D9D9D9] w:80 xl:w-full h-[20vh] pl-28 xl:pl-[7vw] pr-12 xl:h-[15vh] border-[#FFFFFF] border-t-4 rounded-b-lg relative dark:bg-[#00061C] ">
          <div className="avatar absolute -top-[5vh] left-2">
            <img
              src={profileImageUrl}
              className="rounded-full border-8 border-[#D9D9D9] bottom-[70px] w-full h-20 2xl:w-[6vw] 2xl:h-[6vw] "
              alt="User"
            />
          </div>
          <h3 className="text-[3vh]">{blogTextContent}</h3>
          <p className="text-[2.4vh]">{blogDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ImportantBlogCard;
