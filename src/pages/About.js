import React from 'react'
import AboutUs from '../components/aboutus/AboutUs'
import AboutUs2 from '../components/aboutus/AboutUs2';
import Footer from "../components/footer/Footer";
import FooterBLK from "../components/footer/FooterBLK";
import GreyArea from "../components/divider/GreyArea";
import Newsletter from "../components/newsletter/Newsletter";


const About = () => {
  return (
    <div className="w-full bg-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
      <div className='container m-auto'>
            <AboutUs />
      </div>
      <div className="resize-none w-full bg-[#E5E4E2] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
			<div className="w-full	">
				<AboutUs2 />
			</div>
	  </div>

	  <div className="w-full">
			<GreyArea />
	  </div>

	  <div className="w-full text-center">
			<div className="container m-auto">
				<Newsletter />
			</div>
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
    </div>
    
  )
}

export default About;
