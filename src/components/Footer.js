import Logo from "./Logo";
import Link from "./Link";

export const Footer = () => {
	const navigationLinks = [
		"Business Plan",
		"About us",
		"Technology",
		" Investor Relations",
		"News & Resources",
		"FAQs",
		"Contact Us",
	];

	const legalLinks = ["Terms & Conditions", "Privacy Policy"];

	return (
		<footer className="c-footer">
			<div className="content-wrapper d-flex d-flex--align-flex-start load-in">
				<div className="c-footer__logo w-2-col content-inner">
					<div className="c-footer__logo-container ">
						<Logo />
					</div>
				</div>
				<div className="content-inner w-4-col">
					<div className="c-footer__col c-footer__contact">
						<div className="t-mono c-footer__subtitle">Contact Us</div>
						<div className="c-footer__large-link-wrapper">
							<a
								href="mailto:info@spaceenergyinitiative.org.uk"
								className="c-footer__large-link"
							>
								info@starform.co
							</a>
						</div>
						<div className="c-footer__large-link-wrapper">
							<a href="tel:+441235428199" className="c-footer__large-link">
								+44 (0)1235 428199
							</a>
						</div>
					</div>
				</div>

				<div className="content-inner w-3-col c-footer__col">
					<div className="t-mono c-footer__subtitle">Navigation</div>
					<div className="c-footer__links c-footer__navigation-links">
						{navigationLinks.map((link) => (
							<div key={link} className="c-footer__link">
								{link}
							</div>
						))}
					</div>
				</div>
				<div className="content-inner w-3-col c-footer__legal-col">
					<div className="t-mono c-footer__subtitle">Legal</div>
					<div className="c-footer__links">
						{legalLinks.map((link) => (
							<div key={link} className="c-footer__link">
								{link}
							</div>
						))}
					</div>
					<div className="c-footer__twitter-logo-wrapper">
						<svg
						className="c-footer__twitter-logo"
							width="24"
							height="20"
							viewBox="0 0 24 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21.2779 5.24002C21.2921 5.44572 21.2921 5.65142 21.2921 5.85902C21.2921 12.1846 16.4766 19.4798 7.67128 19.4798V19.4761C5.07016 19.4798 2.52307 18.7348 0.333344 17.3299C0.711568 17.3754 1.09169 17.3982 1.47276 17.3991C3.62835 17.401 5.72233 16.6778 7.41818 15.3459C5.3697 15.307 3.57337 13.9714 2.94584 12.0215C3.66343 12.1599 4.40281 12.1315 5.10713 11.939C2.8738 11.4878 1.26706 9.52562 1.26706 7.24679C1.26706 7.22593 1.26706 7.20603 1.26706 7.18612C1.9325 7.55676 2.67758 7.76246 3.43971 7.78521C1.33625 6.37943 0.68787 3.58114 1.9581 1.39331C4.38859 4.38404 7.97462 6.20217 11.8242 6.3946C11.4384 4.73193 11.9654 2.98963 13.2091 1.82083C15.1372 0.00838536 18.1696 0.101283 19.9821 2.02843C21.0542 1.81704 22.0817 1.42365 23.0221 0.866263C22.6647 1.97439 21.9168 2.91569 20.9177 3.51384C21.8666 3.40198 22.7936 3.14793 23.6667 2.76023C23.024 3.72333 22.2144 4.56225 21.2779 5.24002Z"
								fill="white"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className="c-footer__closure content-wrapper d-flex d-flex--justify-space-between d-flex--align-center load-in">
				<p className="c-footer__closure__text content-inner">
					© StarForm 2022 | All rights reserved.
				</p>
				<p className="c-footer__closure__text content-inner">
					Website design by <Link text={"Framework"} />.
				</p>
			</div>
		</footer>
	);
};
export default Footer;
