interface Props {
	className?: string;
}

export function LogoYafaWithText(props: Props) {
	return (
		<div className={props.className}>
			<svg
				width="108"
				height="30"
				viewBox="0 0 108 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_1665_5096)">
					<path d="M15 30L30 0L0 0L15 30Z" fill="#373737" />
					<path
						d="M10.3613 3.19995L15.0143 12.5056L19.6673 3.19995H23.2674L12.4335 24.867L10.6335 21.2669L13.2143 16.1056L6.76123 3.19995H10.3613Z"
						fill="#1FC7B9"
					/>
				</g>
				<path
					d="M35.6102 22L41.9102 8H44.4702L50.7902 22H48.0702L42.6502 9.38H43.6902L38.2902 22H35.6102ZM38.5102 18.76L39.2102 16.72H46.7702L47.4702 18.76H38.5102ZM69.5506 14.44H76.5306V16.64H69.5506V14.44ZM69.7706 22H67.1706V8H77.3906V10.18H69.7706V22ZM91.9195 22L98.2195 8H100.78L107.1 22H104.38L98.9595 9.38H99.9995L94.5995 22H91.9195ZM94.8195 18.76L95.5195 16.72H103.08L103.78 18.76H94.8195Z"
					fill="#373737"
				/>
				<defs>
					<clipPath id="clip0_1665_5096">
						<rect width="30" height="30" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}
