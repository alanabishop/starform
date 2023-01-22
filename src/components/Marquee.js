import ImageMarquee from "./ImageMarquee";

export const Marquee = ({ subtitle }) => {
	return (
		<div className="c-marquee">
            <div className="content-wrapper d-flex d-flex--justify-center">
                {subtitle && (
                    <h3 className="t-mono t-color-gold">{subtitle}</h3>
                )}
            </div>
            <div className="c-marquee__marquee-wrapper">
                <ImageMarquee />
            </div>
        </div>
	);
};

export default Marquee;
