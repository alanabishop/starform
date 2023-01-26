import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";

//Components
import Arrow from "./Arrow";

export const SubmenuPane = ({
	setSubMenuPaneActive,
	subMenuPaneActive,
	subMenuPaneTitle,
	links,
}) => {
	const submenuPaneEl = useRef();

	let subMenuOpenTl = gsap.timeline({ paused: true });
	let subMenuCloseTl = gsap.timeline({ paused: true });

	if (submenuPaneEl?.current) {
		subMenuOpenTl = subMenuOpenTl
			.to(submenuPaneEl?.current, {
				autoAlpha: 1,
				ease: "Power2.easeInOut",
				duration: 0.2,
			})
			.to(submenuPaneEl?.current, {
				x: 0,
				ease: "Power2.easeInOut",
				duration: 0.5,
			});

		subMenuCloseTl = subMenuCloseTl
			.to(submenuPaneEl?.current, {
				x: "100%",
				ease: "Power2.easeInOut",
				duration: 0.5,
			})
			.to(submenuPaneEl?.current, {
				autoAlpha: 0,
				ease: "Power2.easeInOut",
				duration: 0.2,
			});
	}

	useEffect(() => {
		subMenuPaneActive ? subMenuOpenTl.play() : subMenuCloseTl.play();
	}, [subMenuPaneActive]);

	return (
		<div ref={submenuPaneEl} className="c-submenu-pane">
			<div className="c-submenu-pane__navigation content-wrapper">
				<div
					onClick={() => setSubMenuPaneActive(false)}
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
