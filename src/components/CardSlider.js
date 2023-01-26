import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";

//Assets
import cardSlider1 from "../assets/card-slider-1.jpg";
import cardSlider2 from "../assets/card-slider-2.jpg";
import cardSlider3 from "../assets/card-slider-3.jpg";

//Components
import Card from "./Card";
import AnimatedCircles from "./AnimatedCircles";

export const CardSlider = ({ title }) => {
	const [screenWidth] = useState(window.innerWidth);

	const cardContent = [
		{
			tag: "Events",
			imageSrc: cardSlider1,
			date: "24/02/2022",
			title: "Convene an International Partnership for development.",
			subtitle:
				"Helping nations achieve Net Zero and creating new commercial opportunities",
		},
		{
			tag: "Resources",
			imageSrc: cardSlider2,
			date: "24/02/2022",
			title: "Convene an International Partnership for development.",
			subtitle:
				"Helping nations achieve Net Zero and creating new commercial opportunities",
		},
		{
			tag: "News",
			imageSrc: cardSlider3,
			date: "24/02/2022",
			title: "Convene an International Partnership for development.",
			subtitle:
				"Helping nations achieve Net Zero and creating new commercial opportunities",
		},
		{
			tag: "News",
			imageSrc: cardSlider1,
			date: "24/02/2022",
			title: "Convene an International Partnership for development.",
			subtitle:
				"Helping nations achieve Net Zero and creating new commercial opportunities",
		},
		{
			tag: "Events",
			imageSrc: cardSlider2,
			date: "24/02/2022",
			title: "Convene an International Partnership for development.",
			subtitle:
				"Helping nations achieve Net Zero and creating new commercial opportunities",
		},
	];

	return (
		<div className="c-card-slider">
			<h2 className="content-wrapper c-card-slider__title load-in">{title}</h2>
			<div className="c-card-slider__slider load-in">
				<Swiper
					spaceBetween={screenWidth <= 600 ? 8 : 20}
					slidesPerView={
						screenWidth <= 600
							? 1
							: screenWidth > 601 && screenWidth < 900
							? 2.1
							: 3
					}
					modules={[Navigation]}
					navigation={{
						nextEl: ".c-card-slider__next",
						prevEl: ".c-card-slider__prev",
						disabledClass: "is-disabled",
					}}
				>
					{cardContent &&
						cardContent.map(({ tag, imageSrc, date, title, subtitle }, index) => (
							<SwiperSlide
							key={title + index} className="c-card-slider__slide content-inner w-4-col">
								<Card
									tag={tag}
									imageSrc={imageSrc}
									date={date}
									title={title}
									subtitle={subtitle}
								/>
							</SwiperSlide>
						))}
				</Swiper>
			</div>

			<div className="c-card-slider__components content-wrapper load-in">
				<div className="d-flex d-flex--align-center content-inner">
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
