import React from "react";

const Newsletter = () => {
	return (
		<div className="py-36">
			<form action="">
				<div className="newsletter-input mb-5">
					<input
						className="inline py-5 px-5 bg-[#D9D9D9] rounded-l-lg"
						type="email"
						name=""
						id=""
						placeholder="Your Email"
					/>
					<button
						className="inline py-5 px-5 bg-black text-white rounded-r-lg"
						type="submit"
					>
						Subscribe to our newsletter
					</button>
				</div>
			</form>
			<p className="w-96 mx-auto">
				Leave us your email address and we’ll send you our monthly newsletter
				with new Spidre news. You can unsubscribe at any time.
			</p>
		</div>
	);
};

export default Newsletter;
