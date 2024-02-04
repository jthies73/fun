import React from "react";

import { IconMenu } from "../icon/IconMenu";

export function MenuButton() {
	return (
		<div
			className="h-50px w-50px flex justify-center items-center hover:cursor-pointer hover:opacity-50"
			onClick={() => alert("Menu Clicked")}
		>
			<IconMenu />
		</div>
	);
}
