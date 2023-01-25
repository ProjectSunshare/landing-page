import React from "react";
import Footer from "./footer/Footer";
import FooterBLK from "./footer/FooterBLK";
import Navbar from "./navbar/Navbar";
import Navpage from "./navbar/Navpage";

const Mainpage = ({ setToDark }) => {
  return (
    <React.Fragment>
      <section className="overflow-x-hidden">
        <div className="h-[100px] w-full">
          <Navbar setToDark={setToDark} />
        </div>
        <div className="w-full">
          <Navpage />
        </div>
        <div className="w-full bg-[#161616] text-white">
          <div className="container m-auto">
            <Footer />
          </div>
        </div>

        <div className="w-full bg-[#000]">
          <div className="container m-auto">
            <FooterBLK />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Mainpage;
