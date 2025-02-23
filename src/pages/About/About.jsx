import React from "react";
import "../Pages.css";

const AboutUs = () => {
	return (
		<div className="about-us-container">
			{/* Hero Section */}
			<section className="hero-section">
				<h1>About Us</h1>
			</section>

			{/* Content Section */}
			<section className="content-section">
				<div className="content-display">
					<div className="col-md-6">
						<img
							src="https://furns-react.netlify.app/_ipx/w_1080,q_75/%2Fimages%2Fabout%2F02.jpg?url=%2Fimages%2Fabout%2F02.jpg&w=1080&q=75"
							alt=""
						/>
					</div>
					<div className="col-md-6">
						<img
							src="https://furns-react.netlify.app/_ipx/w_1080,q_75/%2Fimages%2Fabout%2F01.jpg?url=%2Fimages%2Fabout%2F01.jpg&w=1080&q=75"
							alt=""
						/>
					</div>
				</div>
				<div className="container">
					<div className="about.content">
						<div className="row">
							{/* Left Column: Our Stores */}
							<div className="col-left">
								<h2>OUR STORES</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
									ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
									reprehenderit in voluptate velit esse.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
									ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
									reprehenderit in voluptate velit esse.
								</p>
							</div>

							{/* Right Column: Our Mission */}
							<div className="col-right">
								<h2>OUR MISSION</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
									ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
									reprehenderit in voluptate velit esse.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
									ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
									reprehenderit in voluptate velit esse.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
