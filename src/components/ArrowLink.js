import Arrow from "./Arrow";

export const ArrowLink = ({ text = "Read More", isHover }) => (
	<div
		className={`c-arrow-link
	${isHover ? "is-hover" : ""}`}
	>
		<span className="c-arrow-link__text">{text}</span>

		<Arrow />
	</div>
);

export default ArrowLink;
