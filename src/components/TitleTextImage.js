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
				{subtitle && <h3 className="t-mono t-color-gold">{subtitle}</h3>}
				{text && <h2 className="c-tti__title">{title}</h2>}
				{text && <div className="c-tti__copy">{text}</div>}
				{buttonText && <Button>{buttonText}</Button>}
			</div>
			<div className="c-tti__image-wrapper content-inner">
				<img className="c-tti__image" src={imageSrc} />
			</div>
		</div>
	</div>
);

export default TitleTextImage;
