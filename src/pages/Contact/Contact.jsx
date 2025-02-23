import React, { useState } from "react";
import "../Pages.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		subject: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const validate = () => {
		let formErrors = {};
		if (!formData.firstName) formErrors.firstName = "First Name is required";
		if (!formData.lastName) formErrors.lastName = "Last Name is required";
		if (!formData.subject) formErrors.subject = "Subject is required";
		if (!formData.message) formErrors.message = "Message is required";
		return formErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formErrors = validate();
		if (Object.keys(formErrors).length === 0) {
			// Handle form submission (e.g., send data to server)
			console.log("Form submitted:", formData);
			setIsSubmitted(true);
			setFormData({
				firstName: "",
				lastName: "",
				subject: "",
				message: "",
			});
		} else {
			setErrors(formErrors);
		}
	};

	return (
		<div className="contact-container">
			{/* Hero Section */}
			<section className="hero-section">
				<h1>Contact Us</h1>
			</section>

			{/* Content Section */}
			<section className="content-section">
				<div className="container">
					<div className="content-row">
						{/* Left Column: Contact Info */}
						<div className="col-left">
							<h2>Contact Info</h2>
							<ul className="contact-info">
								<li>
									<strong>Phone:</strong>
									<p>+012 345 678 102</p>
									<p>+012 345 678 203</p>
								</li>
								<li>
									<strong>Email:</strong>
									<p>email@here.com</p>
									<p>your@email.here</p>
								</li>
								<li>
									<strong>Address:</strong>
									<p>Address goes here,</p>
									<p>street, Crossroad 123.</p>
								</li>
							</ul>
						</div>

						{/* Right Column: Get In Touch Form */}
						<div className="col-right">
							<h2>Get In Touch</h2>
							{isSubmitted && <p className="success-message">Thank you for your message!</p>}
							<form className="contact-form" onSubmit={handleSubmit}>
								<div style={{ display: "flex", justifyContent: "space-between" }}>
									<div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
										<label htmlFor="">First Name</label>
										<div style={{ display: "flex", flexDirection: "column" }}>
											<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
											{errors.firstName && <p className="error-message">{errors.firstName}</p>}
										</div>
									</div>
									<div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
										<label htmlFor="">Last Name</label>
										<div style={{ display: "flex", flexDirection: "column" }}>
											<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
											{errors.lastName && <p className="error-message">{errors.lastName}</p>}
										</div>
									</div>
								</div>
								<div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
									<label htmlFor="">Subject</label>
									<input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
									{errors.subject && <p className="error-message">{errors.subject}</p>}
								</div>
								<div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
									<label htmlFor="">Message</label>
									<textarea style={{ resize: "none" }} name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
									{errors.message && <p className="error-message">{errors.message}</p>}
								</div>
								<button type="submit">Send Message</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
