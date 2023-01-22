import { useState } from "react";

//Components
import ArrowLink from "./ArrowLink";
import Tag from "./Tag";

export const Card = ({ tag, date, imageSrc, title, subtitle }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<article
			className="c-card"
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			{imageSrc && <img className="c-card__image" src={imageSrc} />}
			<div className="c-card__gradient"></div>
			{tag && (
				<div className="c-card__tag">
					<Tag type={tag} />
				</div>
			)}
			<div className="c-card__content">
				{date && <span className="c-card__date t-mono">{date}</span>}
				{title && <h3 className="c-card__title">{title}</h3>}
				{subtitle && <p className="c-card__subtitle">{subtitle}</p>}
				<ArrowLink isHover={isHovered} />
			</div>
		</article>
	);
};

export default Card;
