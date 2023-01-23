import Button from "./Button";

export const FullWidthSlide = ({
	subtitle,
	title,
	copy,
	buttonText,
	imageSrc,
}) => (
	<div className="c-full-width-slide content-wrapper">
		{imageSrc && (
			<div>
				<div className="c-full-width-slide__bg-img__gradient"></div>
				<img className="c-full-width-slide__bg-img" src={imageSrc} />
			</div>
		)}
		<div className="c-full-width-slide__content d-flex d-flex--align-center d-flex--justify-center content-inner">
			{subtitle && (
				<span className="c-full-width-slide__subtitle t-mono t-color-gold">
					{subtitle}
				</span>
			)}
			{title && (
				<h2 className="c-full-width-slide__title content-inner w-10-col">
					{title}
				</h2>
			)}
			{copy && (
				<p className="c-full-width-slide__copy content-inner w-6-col">{copy}</p>
			)}
			{buttonText && (
				<div className="c-full-width-slide__btn">
					<Button>{buttonText}</Button>
				</div>
			)}
		</div>
	</div>
);

export default FullWidthSlide;
