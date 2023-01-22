import Arrow from "./Arrow";

export const Navigation = ({ links, mobile }) => (
	<div
		className={`c-navigation
        ${mobile ? "c-navigation--mobile" : ""}
    `}
	>
		{links &&
			links.map((link) => {
				return (
					<div key={link.name} className="c-navigation__item">
						<a className="c-navigation__link">{link.name}</a>
						{link.subItems.length > 0 && mobile && (
							<div className="c-navigation__arrow">
								<Arrow/>
							</div>
						)}
					</div>
				);
			})}
	</div>
);

export default Navigation;
