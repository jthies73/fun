import { Metadata } from "next";

import { SessionProviderWrapper } from "@/components/util/SessionProviderWrapper";

// These styles apply to every route in the application
import "./globals.css";

export const metadata: Metadata = {
	title: "Y A F A",
	description: "YAFA is Yet Another Fitness App. Made with ❤️",
	manifest: "/manifest.json",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/* TODO: Head from next/head should be used but it doesn't work atm (v14.0.0)*/}
			{/* meta tag "theme-color" is not being added to the head */}
			<head>
				<title>Y A F A</title>

				{/* For some raeson this doesn't work in NextJs 14 */}
				<meta name="theme-color" content="#1fc7b9" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</head>
			<SessionProviderWrapper>
				<body>{children}</body>
			</SessionProviderWrapper>
		</html>
	);
}
