import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../Modals/Modal.css";

const ProductSlider = ({ images = [] }) => {
	const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
	// muje ProductSlider.jsx me aesa kuch bana ke do
	return (
		<div className="product-slider">
			{/* Main Image Slider */}
			<Swiper navigation thumbs={{ swiper: thumbsSwiper }} modules={[Navigation, Thumbs]} className="main-slider">
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img src={image} alt={`Product ${index + 1}`} />
					</SwiperSlide>
				))}
			</Swiper>

			{/* Thumbnail Slider */}
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[Thumbs]}
				className="thumbnail-slider"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img src={image} alt={`Thumbnail ${index + 1}`} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProductSlider;
