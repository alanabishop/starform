import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export const Splash = () => {
	const splashEl = useRef();
	const circle1 = useRef();
	const circle2 = useRef();
	const circle3 = useRef();

	const splashAnimation = (tl) => {
		tl.to(circle1?.current, {
			autoAlpha: 1,
			ease: "Power2.easeInOut",
			duration: 0.2,
			delay: 0.5,
		})
			.to(circle2?.current, {
				autoAlpha: 1,
				ease: "Power2.easeInOut",
				duration: 0.2,
				delay: 0.2,
			})
			.to(circle3?.current, {
				autoAlpha: 1,
				ease: "Power2.easeInOut",
				duration: 0.2,
				delay: 0.2,
			});
		tl.to(circle1?.current, {
			autoAlpha: 0,
			ease: "Power2.easeInOut",
			duration: 0.2,
			delay: 1,
		})
			.to(circle2?.current, {
				autoAlpha: 0,
				ease: "Power2.easeInOut",
				duration: 0.2,
				delay: 0.2,
			})
			.to(circle3?.current, {
				autoAlpha: 0,
				ease: "Power2.easeInOut",
				duration: 0.2,
				delay: 0.2,
			})
			.to(splashEl?.current, {
				autoAlpha: 0,
				ease: "Power2.easeInOut",
				duration: 0.4,
				delay: 0.75,
			});
	};

	useLayoutEffect(() => {
		const splashTl = gsap.timeline();
		splashAnimation(splashTl);
	}, [circle1]);

	return (
		<div className="c-splash" ref={splashEl}>
			<div className="c-splash__circle c-splash__circle-1" ref={circle1}></div>
			<div className="c-splash__circle c-splash__circle-2" ref={circle2}></div>
			<div className="c-splash__circle c-splash__circle-3" ref={circle3}></div>
		</div>
	);
};

export default Splash;
