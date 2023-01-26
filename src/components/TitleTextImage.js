import Button from "./Button";

export const TitleTextImage = ({
	subtitle,
	title,
	text,
	buttonText,
	imageSrc,
}) => (
	<div className="c-tti">
		<div className="c-tti__wrapper d-flex d-flex--align-center d-flex--justify-space-between content-wrapper ">
			<div className="c-tti__content content-inner">
				{subtitle && <h3 className="c-tti__subtitle t-mono t-color-gold load-in">{subtitle}</h3>}
				{text && <h2 className="c-tti__title load-in">{title}</h2>}
				{text && <div className="c-tti__copy load-in">{text}</div>}
				{buttonText && <Button>{buttonText}</Button>}
			</div>
			<div className="c-tti__image-wrapper content-inner load-in">
				<img className="c-tti__image" src={imageSrc} />
			</div>
		</div>
	</div>
);

export default TitleTextImage;
