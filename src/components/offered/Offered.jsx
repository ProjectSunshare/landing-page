import React from "react";
import marketplace from "../../assets/img/offered/marketplace.svg";
import analysis from "../../assets/img/offered/analysis.svg";
import house from "../../assets/img/offered/house.svg";

const Offered = () => {
	return (
		<div>
			<div className="offer pt-32 px-5 lg:px-30 xl:px-40 md:text-start 2xl:px-52 2xl:pb-32">
				<div className="sectionIntro text-center py-16">
					<h2>What We Offer</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className="marketplace py-24 md:flex md:flex-nowrap 2xl:px-32">
					<img className="md:w-6/12" src={marketplace} alt="" />
					<div className="marketplace-content lg:px-20">
						<h4>Blockchain Marketplace Feature</h4>
						<p>
							Showing nearby and newest listings of those who want to sell
							electricity along with relevant information that supports
							decision-making. Transactions are stored securely and verified
							with smart contracts.{" "}
						</p>
						<button
							className="mt-[30px] mx-32 sm:mx-0 px-6 py-2
                           drop-shadow-xl
                           bg-lime-600
                           text-white
                           transition-all
                           hover:bg-lime-500
                           rounded-lg
                           "
						>
							See More
						</button>
					</div>
				</div>
				<div className="analysis py-24 md:flex md:flex-nowrap 2xl:px-32">
					<div className="analysis-content lg:px-20">
						<h4>Daily Forecast on Energy Acquisition</h4>
						<p>
							Predicting how much energy can be acquired throughout the day.
							This helps manage the electricity consumed daily through reports
							that include the total energy consumed by every household
							device—providing an efficient method for monitoring and budgeting
							the resource wisely.
						</p>
						<button
							className="mt-[30px] mx-32 sm:mx-0 px-6 py-2
                            drop-shadow-xl
                            bg-lime-600
                            text-white
                            transition-all
                            hover:bg-lime-500
                            rounded-lg
                            "
						>
							See More
						</button>
					</div>
					<img className="md:w-6/12" src={analysis} alt="" />
				</div>
				<div className="house py-24  md:flex md:flex-nowrap 2xl:px-32">
					<img className="md:w-6/12" src={house} alt="" />
					<div className="house-content lg:px-20">
						<h4>Future Forecast on Energy Demands</h4>
						<p>
							Forecasting of the energy demands in both energy production and
							consumption. Reports include which time period produces or
							consumes more. This gives the users a better view of which time
							produces or consumes the highest for guided decision-making.
						</p>
						<button
							className="mt-[30px] mx-32 sm:mx-0 px-6 py-2
                            drop-shadow-xl
                            bg-lime-600
                            text-white
                            transition-all
                            hover:bg-lime-500
                            rounded-lg
                            "
						>
							See More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offered;
