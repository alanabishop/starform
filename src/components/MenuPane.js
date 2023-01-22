import Navigation from "./Navigation";

export const MobilePane = ({ links }) => {
	return (
		<div className="c-mobile-pane">
			<div className="c-mobile-pane__navigation content-wrapper">
				<Navigation mobile links={links} />
			</div>
		</div>
	);
};

export default MobilePane;
