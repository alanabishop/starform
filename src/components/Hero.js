import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

//Components
import ScrollDown from "./ScrollDown";

export const Hero = ({ title, subtitle, featuredText }) => {
	gsap.registerPlugin(ScrollToPlugin);

	const onClick = () => {
		gsap.to(window, {
			duration: 0.6,
			ease: "power4.easeInOut",
			scrollTo: { y: window.innerHeight },
		});
	};

	return (
		<div className="c-hero">
			<div className="c-hero__bg"></div>
			<div className="c-hero__bg-image"></div>
			<div className="c-hero__gradient"></div>
			<div className="c-hero__content content-wrapper">
				{title && <h1 className="c-hero__title">{title}</h1>}
				<p className="c-hero__subtitle w-5-col">
					{subtitle && subtitle}
					{featuredText && <span className="t-color-gold">{featuredText}</span>}
				</p>
			</div>
			<div className="c-hero__scroll-down">
				<ScrollDown onClick={onClick} />
			</div>
		</div>
	);
};

export default Hero;
