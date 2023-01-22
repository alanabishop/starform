import { useState, useEffect } from "react";

import Logo from "./Logo";
import MobilePane from "./MenuPane";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

export const Header = () => {
	const navigationLinks = [
		{
			name: "Business Plan",
			subItems: [],
		},
		{
			name: "About Us",
			subItems: [],
		},
		{
			name: "Technology",
			subItems: [],
		},
		{
			name: "Investor Relations",
			subItems: [],
		},
		{
			name: "News & Resources",
			subItems: ["News", "Resources"],
		},
		{
			name: "Contact Us",
			subItems: [],
		},
	];

	const [mobilePaneActive, setMobilePaneActive] = useState(false);
	const toggle = () => setMobilePaneActive(!mobilePaneActive);

	useEffect(() => {
		document.body.classList.toggle("mobile-pane-is-active", mobilePaneActive);
	}, [mobilePaneActive]);

	useEffect(() => {
		const handleResize = () => setMobilePaneActive(false);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header className="c-header">
			<div
				className="c-header__content
				content-wrapper"
			>
				<div className="content-inner d-flex d-flex--align-center d-flex--justify-space-between h-100">
					<div className="c-header__logo">
						<Logo />
					</div>
					<div className="c-header__navigation">
						<Navigation links={navigationLinks} />
					</div>
					<MenuToggle toggle={toggle} isOpen={mobilePaneActive} />
				</div>
			</div>

			<MobilePane links={navigationLinks} />
		</header>
	);
};

export default Header;
