import Button from "./Button";

export const Cta = ({ subtitle, title, buttonText }) => (
	<div className="c-cta">
		<div className="c-cta__gradient"></div>
		<div className="content-wrapper h-100">
			<div className="content-inner c-cta__content w-8-col">
				{subtitle && <h3 className="t-mono t-color-gold load-in">{subtitle}</h3>}
				{title && <h2 className="c-cta__title load-in">{title}</h2>}
				{buttonText && (
					<div className="c-cta__btn">
						<Button>{buttonText}</Button>
					</div>
				)}
			</div>
		</div>
	</div>
);

export default Cta;
