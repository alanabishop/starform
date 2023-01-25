import { gsap } from "gsap";
import { useEffect, useRef } from "react";

//Components
import Button from "./Button";

//Hooks
import useStickyState from "../hooks/stickyState";

export const CookieBanner = () => {
	const cookieBannerEl = useRef();
	const [cookieState, setCookieState] = useStickyState(true);

	useEffect(() => {
		if (!cookieState) {
			gsap.to(cookieBannerEl.current, {
				y: "100%",
				autoAlpha: 0,
				ease: "power4.easeInOut",
				duration: 0.3,
			});
		}
	}, [cookieState]);

	return (
		<div ref={cookieBannerEl} className="c-cookie-banner">
			<div className="c-cookie-banner__text">
				This site uses cookies... just like every other site you visit! You can
				read our Cookie Policy if you like :)
			</div>
			<div className="c-cookie-banner__ctas d-flex d-flex--align-center">
				<a
					onClick={() => setCookieState(false)}
					className="c-cookie-banner__link"
				>
					Reject Cookies
				</a>
				<div className="c-cookie-banner__button">
					<Button onClick={() => setCookieState(false)}>Accept Cookies</Button>
				</div>
			</div>
		</div>
	);
};

export default CookieBanner;
