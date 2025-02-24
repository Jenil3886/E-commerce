import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import ReactInput from "../../components/input";
import ReactButton from "../../components/Buttons/button";

const formFields = [
	{ id: "email", name: "email", type: "email", label: "Email", required: true },
	{ id: "password", name: "password", type: "password", label: "Password", required: true },
];

export const SignIn = () => {
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
	};

	return (
		<div className="signup-container">
			<div className="signup-form-wrapper">
				<div className="signup-form-container">
					<h2 className="signup-title">Create an Account</h2>
					<form className="signup-form" onSubmit={handleSubmit} noValidate>
						{formFields.map((field) => (
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
							<ReactButton type="submit" className="auth-btn" disabled={!formData.policy} btnText="Signup" />
						</div>
						<div className="signin-btn-row">
							<Link to="/signup" className="auth-navigat-btn creat-ac">
								Creat an acoount
							</Link>
							<Link to="/signin" className="auth-navigat-btn forgat-pass">
								forgat passwoord?
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
