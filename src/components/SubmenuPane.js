import { useState } from "react";

//Components
import Arrow from "./Arrow";

export const SubmenuPane = ({ subMenuPaneTitle, links }) => {
	const [subMenuPaneActive, setSubMenuPaneActive] = useState(false);

	const handleSubMenu = () => {
		document.body.classList.remove("submenu-pane-is-active");
		setSubMenuPaneActive(false)
	}

	return (
		<div className="c-submenu-pane">
			<div className="c-submenu-pane__navigation content-wrapper">
				<div
					onClick={handleSubMenu}
					className="c-submenu-pane__navigation-item"
				>
					<div className="c-submenu-pane__navigation-arrow">
						<Arrow />
					</div>
					<a className="c-submenu-pane__navigation-link">{subMenuPaneTitle}</a>
				</div>
				{links &&
					links.map((link) => {
						return (
							<div key={link} className="c-submenu-pane__navigation-item">
								<a className="c-submenu-pane__navigation-link">{link}</a>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default SubmenuPane;
