import React from "react";
import Contact from "../components/contact/Contact";
import SupportSect from "../components/opening/SupportSect";
import Faq from "../components/faq/Faq";
import GreyArea from "../components/divider/GreyArea";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import FooterBLK from "../components/footer/FooterBLK";

const Support = () => {
	return (
		<React.Fragment>
			<div className="w-full">
				<div className="container m-auto">
					<SupportSect />
				</div>
			</div>

			<div className="w-full bg-[#E8E6E6]">
				<div className="container m-auto">
					<Contact />
				</div>
			</div>

			<div className="w-full">
				<div className="container m-auto">
					<Faq />
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
		</React.Fragment>
	);
};

export default Support;
