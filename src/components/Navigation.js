import { useEffect, useState } from "react";

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
	}, [links]);

	const handleSubMenu = () => {
		document.body.classList.add("submenu-pane-is-active");
		setSubMenuPaneActive(true)
	}

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
											? handleSubMenu()
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
							{subMenuPaneActive && (
								<SubmenuPane
									subMenuPaneTitle={subMenuItemTitle}
									links={subMenuItem}
								/>
							)}
						</div>
					);
				})}
		</div>
	);
};

export default Navigation;
