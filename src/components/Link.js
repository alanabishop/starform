export const Link = ({ text, disabled }) => (
	<a className={
        `c-link
        ${disabled ? "c-link--disabled" : ""}
    `}
	>
		{text}
	</a>
);

export default Link;
