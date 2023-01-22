export const ScrollDown = ({ onClick }) => (
	<div className="c-scroll-down" onClick={onClick}>
		<svg
			className="c-scroll-down__circle"
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="35.5"
				y="0.5"
				width="35"
				height="35"
				rx="17.5"
				transform="rotate(90 35.5 0.5)"
				stroke="white"
			/>
		</svg>
		<svg
			className="c-scroll-down__arrow"
			width="12"
			height="15"
			viewBox="0 0 12 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 8.3125L6 14L11 8.3125M6 14L6 1L6 14Z"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	</div>
);

export default ScrollDown;
