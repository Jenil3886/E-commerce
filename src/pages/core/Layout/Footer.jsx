import React from "react";
import "../Layout.css";
import { FaFacebook, FaLinkedin, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

// Social Media Links Data
const socialMediaLinks = [
	{ name: "Facebook", url: "https://facebook.com", icon: <FaFacebook /> },
	{ name: "Twitter", url: "https://twitter.com", icon: <FaXTwitter /> },
	{ name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin /> },
	{ name: "YouTube", url: "https://youtube.com", icon: <FaYoutube /> },
	{ name: "Pinterest", url: "https://pinterest.com", icon: <FaPinterest /> },
];

// Information Links Data
const informationLinks = [
	{ name: "About Us", url: "/" },
	{ name: "Manufacturers", url: "/" },
	{ name: "Tracking Order", url: "/" },
	{ name: "Privacy & Policy", url: "/" },
	{ name: "Terms & Conditions", url: "/" },
];

// My Account Links Data
const myAccountLinks = [
	{ name: "Login", url: "/signin" },
	{ name: "My Cart", url: "/cart" },
	{ name: "Wishlist", url: "/wishlist" },
	{ name: "Compare", url: "/compare" },
	{ name: "My Account", url: "/signin" },
];

// Dynamic Footer Component
const Footer = () => {
	return (
		<>
			<div className="footer-container Raleway">
				<div className="container">
					<div className="footer-row">
						{/* About Us Section */}
						<FooterColumn title="ABOUT US">
							<p className="about-text">
								Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud.
							</p>
							<ul className="social-links">
								{socialMediaLinks.map((link, index) => (
									<li key={index}>
										<Link to={link.url} target="_blank" rel="noopener">
											{link.icon}
										</Link>
									</li>
								))}
							</ul>
						</FooterColumn>

						{/* Information Section */}
						<FooterColumn title="INFORMATION">
							<ul className="footer-links">
								{informationLinks.map((link, index) => (
									<li key={index}>
										<a href={link.url}>{link.name}</a>
									</li>
								))}
							</ul>
						</FooterColumn>

						{/* My Account Section */}
						<FooterColumn title="MY ACCOUNT">
							<ul className="footer-links">
								{myAccountLinks.map((link, index) => (
									<li key={index}>
										<a href={link.url}>{link.name}</a>
									</li>
								))}
							</ul>
						</FooterColumn>

						{/* Newsletter Section */}
						<FooterColumn title="NEWSLETTER">
							<form className="newsletter-form">
								<input type="email" placeholder="Enter E-mail Address" required />

								<button color="white" className="theme-btn ">
									<IoIosSend />
									Subscribe
								</button>
							</form>
						</FooterColumn>
					</div>
				</div>
			</div>
			{/* Footer */}
			<footer className="footer_2 Raleway">
				<div className="container">
					<div className="footer_2-contant">
						<p>
							&copy; 2021, Furns. Made With ❤️ by <strong>HasThemes</strong>.
						</p>
						<div className="">
							<img
								src="https://furns-react.netlify.app/_ipx/w_256,q_75/%2Fimages%2Ficons%2Fpayment.png?url=%2Fimages%2Ficons%2Fpayment.png&w=256&q=75"
								alt="..."
							/>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

// Reusable Footer Column Component
const FooterColumn = ({ title, children }) => {
	return (
		<div className="footer-col">
			<h4>{title}</h4>
			{children}
		</div>
	);
};

export default Footer;
