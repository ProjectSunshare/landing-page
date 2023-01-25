import React from "react";
import Contact from "../components/contact/Contact";
import SupportSect from "../components/opening/SupportSect";
import Faq from "../components/faq/Faq";
import GreyArea from "../components/divider/GreyArea";
import Newsletter from "../components/newsletter/Newsletter";
const Support = () => {
  return (
    <React.Fragment>
      <div className="w-full dark:bg-[#0d1f31] dark:text-white">
        <div className="container m-auto">
          <SupportSect />
        </div>
      </div>

      <div className="w-full bg-[#E8E6E6] dark:bg-[#0d1f31] dark:text-white">
        <div className="container m-auto">
          <Contact />
        </div>
      </div>

      <div className="w-full dark:bg-[#0d1f31] dark:text-white">
        <div className="container m-auto">
          <Faq />
        </div>
      </div>

      <div className="w-full dark:bg-[#0d1f31] dark:text-white">
        <GreyArea />
      </div>

      <div className="w-full text-center dark:bg-[#0d1f31] dark:text-white">
        <div className="container m-auto">
          <Newsletter />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Support;
