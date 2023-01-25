import Button from "./Button";

export const CookieBanner = () => (
	<div className="c-cookie-banner">
		<div className="c-cookie-banner__text">This site uses cookies... just like every other site you visit! You can read our Cookie Policy if you like :)</div>
		<div className="c-cookie-banner__ctas d-flex d-flex--align-center">
			<div className="c-cookie-banner__link">Reject Cookies</div>
			<div className="c-cookie-banner__button">
				<Button>Accept Cookies</Button>
			</div>
		</div>
	</div>
);

export default CookieBanner;
