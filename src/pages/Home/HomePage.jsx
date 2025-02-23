import React, { useState } from "react";
import "../Pages.css";
import CollectionSlider from "../../components/CollectionSlider";
import Slider from "../../components/HeroSlider";
import ProductList from "../../components/ProductList";
import banner1 from "../../assets/images/pages/image.jpeg";
import banner2 from "../../assets/images/pages/image (1).jpeg";

const banners = [
	{
		id: 1,
		title: "Sale Furniture For Summer",
		description: "Great Discounts Here",
		imageUrl: banner1,
		link: "/shop",
	},
	{
		id: 2,
		title: "Office Chair For Best Offer",
		description: "Great Discounts Here",
		imageUrl: banner2,
		link: "/shop",
	},
];

const HomePage = ({ wishlist, setWishlist }) => {
	const [filter, setFilter] = useState("New Arrival");

	const handleFilterChange = (newFilter) => {
		setFilter(newFilter);
	};

	return (
		<div className="home-container">
			<Slider />
			<CollectionSlider />

			{/* Featured Products */}
			<div className="container">
				<div className="banner">
					<h2 className="Raleway">Our Products</h2>
					<p className="Raleway">Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
				</div>

				<div className="filter-product Raleway-regular">
					<div onClick={() => handleFilterChange("New Arrival")}>New Arrival</div>
					<div onClick={() => handleFilterChange("Featured")}>Featured</div>
					<div onClick={() => handleFilterChange("On Sale")}>On Sale</div>
					<div onClick={() => handleFilterChange("Trending")}>Trending</div>
				</div>
				<ProductList filter={filter} wishlist={wishlist} setWishlist={setWishlist} />
			</div>

			{/*  banner-section*/}

			<section className="banner-section">
				<div className="row">
					{banners.map((banner) => (
						<div key={banner.id} className="col-lg-6">
							<a href={banner.link} className="banner-link">
								<figure className="banner-figure">
									<img src={banner.imageUrl} alt={banner.title} className="banner-image" />
									<div className="banner-content">
										<h3 className="banner-title" dangerouslySetInnerHTML={{ __html: banner.title }} />
										<p className="banner-description">{banner.description}</p>
									</div>
								</figure>
							</a>
						</div>
					))}
				</div>
			</section>

			{/* latest news */}
			<section>
				<div className="container">
					<div className="banner">
						<h2 className="Raleway">Latest News</h2>
						<p className="Raleway">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
