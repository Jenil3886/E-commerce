import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import ReactInput from "../../components/input";
import ReactButton from "../../components/Buttons/button";

const formFields = [
	{ id: "first_name", name: "first_name", type: "text", label: "First Name *", required: true },
	{ id: "last_name", name: "last_name", type: "text", label: "Last Name *", required: true },
	{ id: "email", name: "email", type: "email", label: "Email *", required: true },
	{ id: "phone", name: "phone", type: "text", label: "Phone *", required: true, placeholder: "E.164 standard. ex: +16135551111." },
	{ id: "password", name: "password", type: "password", label: "Password *", required: true },
	{ id: "confirm_password", name: "confirm_password", type: "password", label: "Confirm Password *", required: true },
];

export const SignUp = () => {
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		password: "",
		confirm_password: "",
		policy: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
	};

	return (
		<div className="signup-container">
			<div className="signup-form-wrapper">
				<div className="signup-form-container">
					<h2 className="signup-title">Create an Account</h2>
					<form className="signup-form" onSubmit={handleSubmit} noValidate>
						<div className="signup-row">
							{formFields.slice(0, 2).map((field) => (
								<div key={field.id} className="signup-col">
									<div className="form-group">
										<ReactInput
											type={field.type}
											id={field.id}
											name={field.name}
											required={field.required}
											value={formData[field.name]}
											onChange={handleChange}
											className="form-control"
											labelName={field.label}
											placeholder={field.placeholder || ""}
											lableClass="input-lable"
										/>
									</div>
								</div>
							))}
						</div>
						{formFields.slice(2).map((field) => (
							<div key={field.id} className="form-group">
								<ReactInput
									type={field.type}
									id={field.id}
									name={field.name}
									required={field.required}
									value={formData[field.name]}
									onChange={handleChange}
									className="form-control"
									labelName={field.label}
									placeholder={field.placeholder || ""}
									lableClass="input-lable"
								/>
							</div>
						))}
						<div className="form-group">
							<div className="checkbox-container">
								<ReactInput type="checkbox" id="policy" name="policy" checked={formData.policy} onChange={handleChange} className="form-checkbox" />
								<label htmlFor="policy">I've read and accept the Privacy Policy</label>
							</div>
							<p className="mt-3">
								By signing up, you agree to our <a href="/">Terms of Service.</a> Learn how we collect and use your data in our{" "}
								<a href="/">Privacy Policy.</a>
							</p>
						</div>
						<div className="form-group">
							<ReactButton type="submit" className="auth-btn" disabled={!formData.policy} btnText="Signup" />
						</div>
						<Link to="/signin" className="signin-btn">
							Already have an account?
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
