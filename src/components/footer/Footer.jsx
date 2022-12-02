import React from "react";
import BGLogo from "../../assets/img/footer/bw-sunshare.png";
import Discord from "../../assets/img/footer/Product Landing/Discord.png";
import Github from "../../assets/img/footer/Product Landing/Github.png";
import Twitter from "../../assets/img/footer/Product Landing/Twitter.png";

const Footer = () => {
	return (
		<div>
			<div className="pt-20 pb-28 lg:grid lg:grid-cols-2">
				<div className="about-section pr-16">
					<img className="mb-2.5" src={BGLogo} alt="" />
					<p className="mr-52 align-left">
						Sunshare is a renewable energy blockchain marketplace application
						for a clean community. Make the future bright with Sunshare!
					</p>
				</div>
				<div className="clickables leading-10 grid lg:grid-cols-2">
					<div className="learnMore">
						<ul>
							<h4 className="list-title">Learn More</h4>
							<li>Home</li>
							<li>About</li>
							<li>Team</li>
							<li>Support</li>
						</ul>
					</div>
					<div className="support">
						<ul>
							<h4 className="list-title">Support</h4>
							<li>FAQ</li>
							<li>Protocol Disclaimer</li>
							<li>Trademark Policy</li>
							<li>Contact Us</li>
							<li>projectsunshare@uc-bcf.edu.ph</li>
							<li>uc.projectsunshare@gmail.com</li>
							<li>
								<img src={Twitter} alt="" className="inline pr-5" />
								<img src={Github} alt="" className="inline pr-5" />
								<img src={Discord} alt="" className="inline pr-5" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
