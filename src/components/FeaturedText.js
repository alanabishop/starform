import Button from "./Button";
import AnimatedCircles from "./AnimatedCircles";

export const FeaturedText = ({ subtitle, text, buttonText }) => (
	<div className="c-featured-text">
		<div className="d-flex content-wrapper c-featured-text__wrapper">
			{subtitle && (
				<div className="c-featured-text__subtitle">
					<h3 className="t-mono t-color-gold">{subtitle}</h3>
				</div>
			)}
			<div className="c-featured-text__content">
				{text && <div className="c-featured-text__copy">{text}</div>}
				{buttonText && <Button>{buttonText}</Button>}
			</div>
		</div>
		<div className="c-featured-text__circles">
			<AnimatedCircles />
		</div>
	</div>
);

export default FeaturedText;
