import React from "react";

import { LogoYafaWithText } from "@/components/ui/logo/LogoYafaWithText";

import { MenuButton } from "../button/MenuButton";

export function HeaderWithMenu() {
	return (
		<div className={"bg-light h-50px flex flex-row"}>
			<LogoYafaWithText className={"p-10px flex-1"} />
			<MenuButton />
		</div>
	);
}
