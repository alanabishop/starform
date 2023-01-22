export const MenuToggle = ({ isOpen, toggle }) => {
	return (
		<div  className={
            `c-menu-toggle
            ${isOpen ? "is-active" : ""}
        `} onClick={toggle} >
			<span className="c-menu-toggle__icon">
				<div className="c-menu-toggle__top c-menu-toggle__line"></div>
				<div className="c-menu-toggle__middle c-menu-toggle__line"></div>
				<div className="c-menu-toggle__bottom c-menu-toggle__line"></div>
			</span>
		</div>
	);
};

export default MenuToggle;
