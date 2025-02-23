import React, { useState } from "react";
import "../Layout.css";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { menuItems } from "../../../helper/data";

const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(null);

	const toggleDropdown = (id) => {
		setDropdownOpen(dropdownOpen === id ? null : id);
	};
	return (
		<div className="navbar d-none d-lg-block Raleway-light">
			<div className="container">
				<div className="row">
					<div className="col">
						<nav>
							<ul>
								{menuItems.map((item) => (
									<li
										key={item.id}
										className={item.subItems ? "dropdown" : ""}
										onMouseEnter={() => item.subItems && toggleDropdown(item.id)}
										onMouseLeave={() => item.subItems && toggleDropdown(null)}
									>
										<Link to={item.link}>
											{item.title}
											{item.subItems && <IoIosArrowDown />}
										</Link>
										{item.subItems && dropdownOpen === item.id && (
											<ul className="dropdown-menu">
												{item.subItems.map((subItem) => (
													<li key={subItem.title}>
														<Link to={subItem.link}>{subItem.title}</Link>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
