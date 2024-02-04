import { useState } from "react";

import { classNames } from "@/lib/utils";

import { DefaultButton } from "../button/DefaultButton";

interface Props {
	onSelectionChange: (fatigue: 0 | 1 | 2 | 3 | 4) => void;
	className?: string;
}

export function FatigueSelection({ onSelectionChange, className = "" }: Props) {
	const [fatigue, setFatigue] = useState(0);

	return (
		<div
			className={classNames(
				"flex justify-normal space-x-1 items-stretch",
				className
			)}
		>
			<DefaultButton
				onClick={() => {
					setFatigue(0);
					onSelectionChange(0);
				}}
				className={classNames(
					"flex-1",
					fatigue === 0 ? "bg-green-300" : ""
				)}
				text="none"
			/>
			<DefaultButton
				onClick={() => {
					setFatigue(1);
					onSelectionChange(1);
				}}
				className={classNames(
					"flex-1",
					fatigue === 1 ? "bg-lime-300" : ""
				)}
				text="low"
			/>
			<DefaultButton
				onClick={() => {
					setFatigue(2);
					onSelectionChange(2);
				}}
				className={classNames(
					"flex-1",
					fatigue === 2 ? "bg-yellow-300" : ""
				)}
				text="medium"
			/>
			<DefaultButton
				onClick={() => {
					setFatigue(3);
					onSelectionChange(3);
				}}
				className={classNames(
					"flex-1",
					fatigue === 3 ? "bg-orange-300" : ""
				)}
				text="high"
			/>
			<DefaultButton
				onClick={() => {
					setFatigue(4);
					onSelectionChange(4);
				}}
				className={classNames(
					"flex-1",
					fatigue === 4 ? "bg-red-300" : ""
				)}
				text="very high"
			/>
		</div>
	);
}
