import React from "react";
import "./SocialShare.css";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialShare = () => {
	return (
		<div className="social-share">
			<h4>Share:</h4>
			<div className="social-icons">
				<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
					<FaFacebookSquare />
				</a>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
					<FaSquareXTwitter />
				</a>
				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
					<FaLinkedin />
				</a>
			</div>
		</div>
	);
};

export default SocialShare;
