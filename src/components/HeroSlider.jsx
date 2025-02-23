import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Components.css";

const Slider = () => {
	return (
		<div className="slider-container">
			<Swiper
				modules={[Navigation, Pagination, EffectFade]}
				navigation
				pagination={{ clickable: true }}
				effect="fade"
				loop={true}
				className="swiper-container"
			>
				{/* Slide 1 */}
				<SwiperSlide>
					<div className="slide-content">
						<div className="hero-1">
							<div className="hero-content">
								<h4 className="Raleway-regular">New Products</h4>
								<h1 className="Raleway-bold">Flexible Chair</h1>
								<p className="Raleway">
									Torem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmo tempor incididunt ut labore et dolore magna.
								</p>
								<button className="shop-now Raleway">Shop Now</button>
							</div>
						</div>
					</div>
				</SwiperSlide>

				{/* Slide 2 */}
				<SwiperSlide>
					<div className="slide-content">
						<div className="hero-2">
							<div className="hero-content">
								<h4 className="Raleway">Best Seller</h4>
								<h1 className="Raleway">Creative Sofa</h1>
								<p className="Raleway">
									Torem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmo tempor incididunt ut labore et dolore magna.
								</p>
								<button className="shop-now Raleway">Shop Now</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
