import React from "react";

import { classNames } from "@/lib/utils";

interface Props {
	className?: string;
	icon?: React.FC;
	text?: string;
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export function DefaultButton({ className = "", icon, text, onClick }: Props) {
	return (
		<div
			className={classNames(
				"flex items-center justify-center px-3 py-4 rounded-md hover:cursor-pointer active:opacity-50",
				className
			)}
			onClick={onClick}
		>
			{icon ? React.createElement(icon) : null}
			{text ? (
				<label className="text-sm text-center font-medium select-none text-gray-900">
					{text}
				</label>
			) : null}
		</div>
	);
}
