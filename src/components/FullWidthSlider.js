import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper";

//Components
import FullWidthSlide from "./FullWidthSlide"

//Assets
import sliderImage from "../assets/slider.jpg";
import sliderImage2 from "../assets/card-slider-1.jpg";
import sliderImage3 from "../assets/card-slider-2.jpg";
import sliderImage4 from "../assets/card-slider-3.jpg";

export const FullWidthSlider = () => {
	const sliderContent = [
		{
			subtitle: "The Benefits of Space Solar",
			title:
				"Convene an international partnership for development of space based energy.",
			copy: "The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources.",
			buttonText: "Business Plan",
			imageSrc: sliderImage,
		},
		{
			subtitle: "The Benefits of Space Solar",
			title:
				"Convene an international partnership for development of space based energy.",
			copy: "The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources.",
			buttonText: "Business Plan",
			imageSrc: sliderImage2,
		},
		{
			subtitle: "The Benefits of Space Solar",
			title:
				"Convene an international partnership for development of space based energy.",
			copy: "The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources.",
			buttonText: "Business Plan",
			imageSrc: sliderImage3,
		},
		{
			subtitle: "The Benefits of Space Solar",
			title:
				"Convene an international partnership for development of space based energy.",
			copy: "The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources.",
			buttonText: "Business Plan",
			imageSrc: sliderImage4,
		},
		{
			subtitle: "The Benefits of Space Solar",
			title:
				"Convene an international partnership for development of space based energy.",
			copy: "The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources.",
			buttonText: "Business Plan",
			imageSrc: sliderImage,
		},
	];

	return (
		<div className="c-full-width-slider">
			<Swiper
				slidesPerView={1}
				modules={[Navigation, Pagination]}
				navigation={{
					nextEl: ".c-full-width-slider__btn-next",
					prevEl: ".c-full-width-slider__btn-prev",
					disabledClass: "is-disabled",
				}}
				pagination={{
					el: ".c-full-width-slider__pagination",
					clickable: true,
					bulletClass: "c-full-width-slider__pagination-bullet",
				}}
			>
				{sliderContent.map(
					({ subtitle, title, copy, buttonText, imageSrc }, index) => (
						<SwiperSlide
						key={index}
						className="c-full-width-slider__slide">
							<FullWidthSlide
								subtitle={subtitle}
								title={title}
								copy={copy}
								buttonText={buttonText}
								imageSrc={imageSrc}
							/>
						</SwiperSlide>
					)
				)}
			</Swiper>

			<div className="c-full-width-slider__components">
				<div className="content-wrapper d-flex d-flex--justify-center d-flex--align-center">
					<div className="c-full-width-slider__btn c-full-width-slider__btn-prev">
						<svg
							className="c-full-width-slider__prev-arrow c-full-width-slider__arrow"
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
					<div className="c-full-width-slider__pagination"></div>
					<div className="c-full-width-slider__btn c-full-width-slider__btn-next">
						<svg
							className="c-full-width-slider__arrow c-full-width-slider__next-arrow"
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
		</div>
	);
};

export default FullWidthSlider;
