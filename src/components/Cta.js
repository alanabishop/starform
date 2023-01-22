import Button from "./Button";

export const Cta = ({ subtitle, title, buttonText }) => (
	<div className="c-cta">
		<div className="c-cta__gradient"></div>
		<div className="c-cta__content content-wrapper">
			{subtitle && <h3 className="t-mono t-color-gold">{subtitle}</h3>}
			{title && <h2 className="c-cta__title">{title}</h2>}
			{buttonText && (
				<div className="c-cta__btn">
					<Button>{buttonText}</Button>
				</div>
			)}
		</div>
	</div>
);

export default Cta;
