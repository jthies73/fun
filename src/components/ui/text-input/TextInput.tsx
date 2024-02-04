import { useState } from "react";

import { classNames } from "@/lib/utils";

interface Props {
	onTextChange: (value: string) => void;
	onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	label?: string;
	value?: string;
	unit?: string;
	backgroundColor?: string;
	className?: string;
}

export default function TextInput({
	onTextChange,
	onKeyUp,
	label,
	value = "",
	unit,
	backgroundColor = "bg-light",
	className = "",
}: Props) {
	const [text, setText] = useState<string>(value);
	return (
		<div
			className={classNames(
				"relative p-1 rounded-md ring-1 ring-inset ring-gray-300",
				className
			)}
		>
			{/* TODO: maybe implement Transition from placeholder here */}
			{/* <Transition show={true}> */}
			<label
				htmlFor="name"
				className={classNames("custom-label", backgroundColor)}
			>
				{label}
			</label>
			{/* </Transition> */}
			<div className="flex w-full">
				<input
					type="text"
					className={classNames(
						"w-full flex-1 py-3 pl-5 focus:outline-none text-gray-900 placeholder:text-gray-400 bg-white",
						backgroundColor,
						!unit ? "pr-5" : ""
					)}
					onChange={(e) => {
						const value = e.target.value;
						setText(value);
						onTextChange(value);
					}}
					value={text}
					onKeyUp={onKeyUp}
				/>
				{unit ? (
					<div className="py-3 px-5 select-none">{unit}</div>
				) : null}
			</div>
		</div>
	);
}
