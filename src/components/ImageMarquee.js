import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

//Assets
import samsungLogo from "../assets/samsung-logo.png";
import appleLogo from "../assets/apple-logo.png";
import teslaLogo from "../assets/tesla-logo.png";

const ImageMarquee = () => {
	let marqueeImages = [samsungLogo, teslaLogo, appleLogo];
	const marqueeElements = useRef([]);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const marqueeTween = useRef();

	const duplicateMarqueeImages = () => {
		while (marqueeImages.length < 12) {
			marqueeImages = marqueeImages.concat(marqueeImages);
		}
	};

	useEffect(() => {
		resizeHandler();
		window.addEventListener("resize", resizeHandler);
		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, []);

	useEffect(() => {
		marqueeInitialSet();
		marqueeTween.current && marqueeTween.current.pause().kill();
		marqueeTween.current = gsap.to(marqueeElements.current, {
			x: `+=-${screenWidth * 1.5}`,
			ease: "none",
			repeat: -1,
			duration: screenWidth < 900 ? 10 : 20,
			rotation: 0.1,
			modifiers: {
				x: (x) => {
					return (parseFloat(x) % (screenWidth * 1.5)) + "px";
				},
			},
		});
	}, [screenWidth]);

	const marqueeInitialSet = () => {
		gsap.set(marqueeElements.current, {
			xPercent: -100,
			x: function (index) {
				if (screenWidth < 1400) {
					return (screenWidth / 4) * index;
				} else {
					return (screenWidth / 6) * index;
				}
			},
		});
	};

	const resizeHandler = () => {
		gsap.set(marqueeElements.current, { clearProps: "all" });
		setScreenWidth(window.innerWidth);
	};

	const marqueeElementsRefHandler = (e, i) => {
		marqueeElements.current[i] = e;
	};

	const renderMarqueeElements = () => {
		duplicateMarqueeImages();
		return marqueeImages.map((imageSrc, i) => {
			return (
				<div
					className="c-image-marquee__el"
					key={`marquee-${i}`}
					ref={(imageSrc) => marqueeElementsRefHandler(imageSrc, i)}
				>
					<img className="c-image-marquee__image" src={imageSrc} />
				</div>
			);
		});
	};
	return <div className="c-image-marquee">{renderMarqueeElements()}</div>;
};

export default ImageMarquee;
