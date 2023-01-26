import { useRef } from "react";

import useIntersection from "../hooks/useIntersection";

export const AnimatedCircles = () => {
	const ref = useRef();
    const inViewport = useIntersection(ref);

	if (inViewport) {
		ref.current.classList.add('is-active')
	}

	return (
		<div className="c-animated-circles " ref={ref}>
			<svg width="100%" height="100%" viewBox="0 0 347 476" fill="none">
				<circle
					className="c-animated-circles__line c-animated-circles__line-1"
					opacity="0.6"
					cx="238.249"
					cy="238.249"
					r="183.112"
					strokeWidth="4"
				/>
				<circle
					className="c-animated-circles__line c-animated-circles__line-2"
					cx="238.001"
					cy="238"
					r="132.038"
					strokeWidth="4"
				/>
				<circle
					className="c-animated-circles__line c-animated-circles__line-3"
					opacity="0.4"
					cx="238.25"
					cy="238.249"
					r="235.431"
					strokeWidth="4"
				/>
			</svg>
		</div>
	);
};

export default AnimatedCircles;
