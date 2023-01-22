export const Tag = ({ type }) => (
	<div
		className={`c-tag
        bg-color-${
					type == "Events" ? "light-blue" : type == "Resources" ? "green" : "orange"
				}
    `}
	>
		<span className="c-tag__text t-mono">{type}</span>
	</div>
);

export default Tag;
