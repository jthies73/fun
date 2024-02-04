"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {
	children?: React.ReactNode;
};

// This component wraps the entire application and makes session data available globally
// This is necessary since the RootLayout component is rendered on the server side and can not use React context
export const SessionProviderWrapper = ({ children }: Props) => {
	return <SessionProvider>{children}</SessionProvider>;
};
