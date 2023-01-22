import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const Button = ({ children, onClick, squared, disabled }) => {
	const buttonRef = useRef(null);
	const buttonTween = useRef(null);

	useEffect(() => {
		buttonRef.current.style.background = 'linear-gradient(315deg, transparent 15px, #3C76B6 0px)';

		buttonTween.current = gsap.to(buttonRef.current, {
			duration: 0.2,
			ease: "power4.easeInOut",
			background: 'linear-gradient(315deg, transparent 15px, #2E5C8E 0px)',
			paused: true,
		});
	}, []);

	const onMouseEnterHandler = () => {
		buttonTween.current.play();
	};
	const onMouseLeaveHandler = () => {
		buttonTween.current.reverse();
	};

	return (
		<div
			className={`c-btn
        ${squared ? "c-btn--squared" : ""}
        ${disabled ? "c-btn--disabled" : ""}
        `}
			onClick={onClick}
			ref={buttonRef}
			onMouseEnter={onMouseEnterHandler}
			onMouseLeave={onMouseLeaveHandler}
		>
			<span>{children}</span>
		</div>
	);
};

export default Button;
