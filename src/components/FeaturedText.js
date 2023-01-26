import Button from "./Button";
import AnimatedCircles from "./AnimatedCircles";

export const FeaturedText = ({ subtitle, text, buttonText }) => (
	<div className="c-featured-text">
		<div className="d-flex content-wrapper c-featured-text__wrapper">
			<div className="content-inner w-3-col">
			{subtitle && (
				<div className="c-featured-text__subtitle load-in">
					<h3 className="t-mono t-color-gold load-in">{subtitle}</h3>
				</div>
			)}
			</div>

			<div className="c-featured-text__content content-inner w-8-col">
				{text && <div className="c-featured-text__copy load-in">{text}</div>}
				{buttonText && <Button>{buttonText}</Button>}
			</div>
		</div>
		<div className="c-featured-text__circles">
			<AnimatedCircles />
		</div>
	</div>
);

export default FeaturedText;
