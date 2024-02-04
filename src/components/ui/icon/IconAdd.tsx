interface Props {
	className?: string;
}

export function IconAdd(props: Props) {
	return (
		<div className={props.className}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M17.5 11H13V6.5C13 6.25 12.75 6 12.5 6H11.5C11.2188 6 11 6.25 11 6.5V11H6.5C6.21875 11 6 11.25 6 11.5V12.5C6 12.7812 6.21875 13 6.5 13H11V17.5C11 17.7812 11.2188 18 11.5 18H12.5C12.75 18 13 17.7812 13 17.5V13H17.5C17.75 13 18 12.7812 18 12.5V11.5C18 11.25 17.75 11 17.5 11Z"
					fill="#333333"
				/>
			</svg>
		</div>
	);
}
