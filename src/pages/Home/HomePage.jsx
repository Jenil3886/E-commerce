import React, { useState } from "react";
import "../Pages.css";
import CollectionSlider from "../../components/CollectionSlider";
import Slider from "../../components/HeroSlider";
import ProductList from "../../components/ProductList";

import { FILTER_PRODUCT_NAME, SECTION_NAME } from "../../helper/constant";
import { banners } from "../../helper/data";

const HomePage = ({ wishlist, setWishlist }) => {
	const [filter, setFilter] = useState(FILTER_PRODUCT_NAME.NEW_ARRIVAL);

	const handleFilterChange = (newFilter) => {
		setFilter(newFilter);
	};

	return (
		<div className="home-container">
			<Slider />
			<CollectionSlider />
			<div className="container">
				<div className="banner">
					<h2 className="Raleway">{SECTION_NAME.OUR_PRODUCT}</h2>
					<p className="Raleway">Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
				</div>

				<div className="filter-product Raleway-regular">
					<div
						className={filter === FILTER_PRODUCT_NAME.NEW_ARRIVAL ? "active-filter" : ""}
						onClick={() => handleFilterChange(FILTER_PRODUCT_NAME.NEW_ARRIVAL)}
					>
						{FILTER_PRODUCT_NAME.NEW_ARRIVAL}
					</div>
					<div
						className={filter === FILTER_PRODUCT_NAME.FEATURED ? "active-filter" : ""}
						onClick={() => handleFilterChange(FILTER_PRODUCT_NAME.FEATURED)}
					>
						{FILTER_PRODUCT_NAME.FEATURED}
					</div>
					<div
						className={filter === FILTER_PRODUCT_NAME.ON_SALE ? "active-filter" : ""}
						onClick={() => handleFilterChange(FILTER_PRODUCT_NAME.ON_SALE)}
					>
						{FILTER_PRODUCT_NAME.ON_SALE}
					</div>
					<div
						className={filter === FILTER_PRODUCT_NAME.TRANDING ? "active-filter" : ""}
						onClick={() => handleFilterChange(FILTER_PRODUCT_NAME.TRANDING)}
					>
						{FILTER_PRODUCT_NAME.TRANDING}
					</div>
				</div>
				<ProductList filter={filter} wishlist={wishlist} setWishlist={setWishlist} />
			</div>
			{/*  banner-section */}
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
						<h2 className="Raleway">{SECTION_NAME.LATEST_NEWS}</h2>
						<p className="Raleway">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
