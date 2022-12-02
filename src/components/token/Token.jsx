import React from "react";
import token from "../../assets/img/token/sunshareToken.svg";

const Token = () => {
	return (
		<div>
			<div className="token-container text-start py-32 px-10 md:flex md:flex-nowrap 2xl:px-80 2xl:py-52">
				<canvas id="tokenModel"></canvas>
				<img className="md:w-6/12" src={token} alt="" />
				<div className="token-details pt-12 md:px-5 xl:px-28 2xl:pl-52 2xl:pt-20">
					<h4>Sunshare Token</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat
					</p>
					<h6 className="py-5 font-semibold">
						Learn more about Sunshare Token.{" "}
					</h6>
				</div>
			</div>
		</div>
	);
};

export default Token;
