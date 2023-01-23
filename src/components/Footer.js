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
			<div className="content-wrapper d-flex d-flex--align-flex-start">
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
							<div key={link} className="c-footer__link">{link}</div>
						))}
					</div>
				</div>
				<div className="content-inner w-3-col">
					<div className="t-mono c-footer__subtitle">Legal</div>
					<div className="c-footer__links">
						{legalLinks.map((link) => (
							<div  key={link} className="c-footer__link">{link}</div>
						))}
					</div>
				</div>
			</div>
			<div className="c-footer__closure content-wrapper d-flex d-flex--justify-space-between d-flex--align-center">
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
