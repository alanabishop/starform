import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";

//Assets
import ttiImage from "../assets/tti.jpg";

//Components
import Card from "./Card";
import AnimatedCircles from "./AnimatedCircles";

export const CardSlider = ({ title }) => {
	const [screenWidth] = useState(window.innerWidth);

	return (
		<div className="c-card-slider">
			<h2 className="content-wrapper c-card-slider__title">{title}</h2>
			<div className="c-card-slider__slider">
				<Swiper
					spaceBetween={screenWidth <= 600 ? 10 : 20}
					slidesPerView={
						screenWidth <= 600
							? 1.1
							: screenWidth > 601 && screenWidth < 900
							? 2.1
							: 3.1
					}
					modules={[Navigation]}
					navigation={{
						nextEl: ".c-card-slider__next",
						prevEl: ".c-card-slider__prev",
						disabledClass: "is-disabled",
					}}
				>
					<SwiperSlide className="c-card-slider__slide">
						<Card
							tag={"Events"}
							imageSrc={ttiImage}
							date={"24/02/2022"}
							title={"Convene an International Partnership for development."}
							subtitle={
								"Helping nations achieve Net Zero and creating new commercial opportunities"
							}
						/>
					</SwiperSlide>
					<SwiperSlide className="c-card-slider__slide">
						<Card
							tag={"Resources"}
							imageSrc={ttiImage}
							date={"24/02/2022"}
							title={"Convene an International Partnership for development."}
							subtitle={
								"Helping nations achieve Net Zero and creating new commercial opportunities"
							}
						/>
					</SwiperSlide>
					<SwiperSlide className="c-card-slider__slide">
						<Card
							tag={"News"}
							imageSrc={ttiImage}
							date={"24/02/2022"}
							title={"Convene an International Partnership for development."}
							subtitle={
								"Helping nations achieve Net Zero and creating new commercial opportunities"
							}
						/>
					</SwiperSlide>
					<SwiperSlide className="c-card-slider__slide">
						<Card
							tag={"News"}
							imageSrc={ttiImage}
							date={"24/02/2022"}
							title={"Convene an International Partnership for development."}
							subtitle={
								"Helping nations achieve Net Zero and creating new commercial opportunities"
							}
						/>
					</SwiperSlide>
				</Swiper>
			</div>

			<div className="c-card-slider__components content-wrapper">
				<div className="d-flex d-flex--align-center">
					<div className="c-card-slider__prev c-btn c-btn--square">
						<svg
							className="c-card-slider__prev-arrow c-card-slider__arrow"
							width="15"
							height="12"
							viewBox="0 0 15 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.3125 11L14 6L8.3125 1M14 6L1 6L14 6Z"
								stroke="white"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div className="c-card-slider__next c-btn c-btn--square">
						<svg
							className="c-card-slider__arrow c-card-slider__next-arrow"
							width="15"
							height="12"
							viewBox="0 0 15 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.3125 11L14 6L8.3125 1M14 6L1 6L14 6Z"
								stroke="white"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>

			<div className="c-card-slider__cirles">
				<AnimatedCircles />
			</div>
		</div>
	);
};

export default CardSlider;
