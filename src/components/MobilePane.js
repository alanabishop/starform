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
				duration: 0.2,
			})
			.to(mobilePaneEl?.current, {
				x: 0,
				ease: "Power2.easeInOut",
				duration: 0.5,
			});

		menuCloseTl = menuCloseTl
			.to(mobilePaneEl?.current, {
				x: "100%",
				ease: "Power2.easeInOut",
				duration: 0.5,
			})
			.to(mobilePaneEl?.current, {
				autoAlpha: 0,
				ease: "Power2.easeInOut",
				duration: 0.2,
			});
	}

	useEffect(() => {
		mobilePaneActive ? menuOpenTl.play() : menuCloseTl.play();
		document.body.classList.toggle("has-active-mobile-pane", mobilePaneActive);
	}, [mobilePaneActive]);

	return (
		<div ref={mobilePaneEl} className="c-mobile-pane">
			<div className="c-mobile-pane__navigation content-wrapper">
				<Navigation mobile links={links} />
				<div className="c-mobile-pane__twitter-wrapper">
					<svg
						className="c-mobile-pane__twitter"
						width="28"
						height="23"
						viewBox="0 0 28 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M25.1335 5.72579C25.1505 5.97533 25.1505 6.22486 25.1505 6.47669C25.1505 14.1502 19.3719 23 8.80553 23V22.9954C5.68418 23 2.62767 22.0962 0 20.392C0.45387 20.4472 0.910014 20.4748 1.3673 20.4759C3.95401 20.4782 6.46679 19.6008 8.50181 17.9852C6.04363 17.938 3.88804 16.3178 3.135 13.9524C3.9961 14.1203 4.88336 14.0858 5.72854 13.8523C3.04855 13.305 1.12046 10.9246 1.12046 8.16019C1.12046 8.13489 1.12046 8.11074 1.12046 8.08659C1.91899 8.53621 2.81308 8.78575 3.72765 8.81335C1.20349 7.108 0.425432 3.71342 1.94971 1.05938C4.8663 4.68741 9.16953 6.89297 13.789 7.1264C13.326 5.10943 13.9585 2.99586 15.4509 1.578C17.7646 -0.620659 21.4035 -0.507966 23.5785 1.82984C24.865 1.5734 26.0981 1.09618 27.2265 0.420025C26.7976 1.76429 25.9001 2.90617 24.7012 3.63177C25.8399 3.49608 26.9523 3.1879 28 2.71758C27.2288 3.88591 26.2573 4.90359 25.1335 5.72579Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default MobilePane;
