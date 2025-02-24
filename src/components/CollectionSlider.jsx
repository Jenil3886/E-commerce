import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Scrollbar, A11y } from "swiper/modules";
import { collections } from "../helper/data";
import "./Components.css";

const CollectionSlider = () => {
	return (
		<section className="collection-slider-section">
			<div className="container">
				<Swiper
					modules={[Scrollbar, A11y]}
					spaceBetween={30}
					slidesPerView={5}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => {}}
				>
					{collections.map((collection) => (
						<SwiperSlide key={collection.id}>
							<a href={collection.link} className="collection-link">
								<div className="collection-item">
									<div className="collection-image-container">
										<div className="collection-image-wrapper">
											<img
												alt=""
												aria-hidden="true"
												src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iNjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
												className="placeholder-image"
											/>
											<img alt={collection.title} src={collection.imageUrl} className="collection-image" />
										</div>
									</div>
									<h4 className="collection-title">{collection.title}</h4>
								</div>
							</a>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default CollectionSlider;
