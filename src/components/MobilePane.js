import { gsap } from "gsap";
import { useRef, useEffect } from "react";

//Components
import Navigation from "./Navigation";

export const MobilePane = ({ mobilePaneActive, links }) => {
	const mobilePaneEl = useRef();

	let menuOpenTl = gsap.timeline({ paused: true });
	let menuCloseTl = gsap.timeline({ paused: true });

	if (mobilePaneEl?.current) {
		menuOpenTl = menuOpenTl
			.to(mobilePaneEl?.current, {
				autoAlpha: 1,
				ease: "Power2.easeInOut",
				duration: 0.5,
			})
			.to(mobilePaneEl?.current, {
				x: 0,
				ease: "Power2.easeInOut",
				duration: 0.5,
			});

		menuCloseTl = menuCloseTl
			.to(mobilePaneEl?.current, {
				x: "100%",
				ease: "Power4.easeInOut",
				duration: 0.5,
			})
			.to(mobilePaneEl?.current, {
				autoAlpha: 0,
				ease: "Power4.easeInOut",
				duration: 0.5,
			});
	}

	useEffect(() => {
		mobilePaneActive ? menuOpenTl.play() : 	menuCloseTl.play();
		document.body.classList.toggle("has-active-mobile-pane", mobilePaneActive);
	}, [mobilePaneActive]);

	return (
		<div ref={mobilePaneEl} className="c-mobile-pane">
			<div className="c-mobile-pane__navigation content-wrapper">
				<Navigation mobile links={links} />
			</div>
		</div>
	);
};

export default MobilePane;
