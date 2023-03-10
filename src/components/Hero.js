import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

//Assets
import heroImage from "../assets/hero.jpg";

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
			<img className="c-hero__image" src={heroImage} />
			<div className="c-hero__gradient"></div>
			<div className="c-hero__content load-in content-wrapper">
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
