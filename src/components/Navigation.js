import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

//Components
import Arrow from "./Arrow";
import SubmenuPane from "./SubmenuPane";

export const Navigation = ({ links, mobile }) => {
	const [subMenuPaneActive, setSubMenuPaneActive] = useState(false);
	const [subMenuItem, setSubMenuItem] = useState([]);

	const [subMenuItemTitle, setSubMenuItemTitle] = useState("");

	useEffect(() => {
		if (links) {
			links.map((link) => {
				if (link.subItems.length > 0) {
					setSubMenuItem([...link.subItems, link.name]);
				}
			});
		}
	}, []);

	useEffect(() => {
		setSubMenuItemTitle(subMenuItem.pop());
	}, [subMenuItem]);

	return (
		<div
			className={`c-navigation
        ${mobile ? "c-navigation--mobile" : ""}
    `}
		>
			{links &&
				links.map((link) => {
					return (
						<div>
							<div key={link.name} className="c-navigation__item">
								<a
									onClick={() =>
										link.subItems.length > 0 && mobile
											? setSubMenuPaneActive(true)
											: ""
									}
									className="c-navigation__link"
								>
									{link.name}
								</a>
								{link.subItems.length > 0 && mobile && (
									<div className="c-navigation__arrow">
										<Arrow />
									</div>
								)}
							</div>
						</div>
					);
				})}
			<SubmenuPane
				setSubMenuPaneActive={setSubMenuPaneActive}
				subMenuPaneActive={subMenuPaneActive}
				subMenuPaneTitle={subMenuItemTitle}
				links={subMenuItem}
			/>
		</div>
	);
};

export default Navigation;
