import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { collections } from "../helper/data";

const CollectionSlider = () => {
	return (
		<section style={{ padding: "20px 0" }}>
			<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
				<Swiper spaceBetween={30} slidesPerView={5} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
					{collections.map((collection) => (
						<SwiperSlide key={collection.id}>
							<a href={collection.link} style={{ textDecoration: "none", color: "inherit" }}>
								<div
									style={{
										textAlign: "center",
										border: "1px solid black",
										borderRadius: "100%",
										height: "100%",
										width: "100%",
										padding: "50px",
										// hover: { border: "1px solid red" },
										"&:hover": {
											background: "#efefef",
										},
									}}
								>
									<div
										style={{
											display: "inline-block",
											maxWidth: "100%",
											overflow: "hidden",
											position: "relative",
											boxSizing: "border-box",
											margin: "0",
										}}
									>
										<div style={{ boxSizing: "border-box", display: "block", maxWidth: "100%" }}>
											<img
												alt=""
												aria-hidden="true"
												src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iNjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
												style={{ maxWidth: "100%", display: "block", margin: "0", border: "none", padding: "0" }}
											/>
										</div>
										<img
											alt={collection.title}
											src={collection.imageUrl}
											style={{
												position: "absolute",
												top: "0",
												left: "0",
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
										/>
									</div>
									<h4 style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold" }}>{collection.title}</h4>
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
