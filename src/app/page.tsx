"use client";

import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Root() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>F.U.N. Stuff!</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>
					<span
						className="bg-black-500 text-white p-1 rounded-md text-7xl font-bold"
						style={{
							background:
								"linear-gradient(45deg, #ff6600, #cc00ff)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							fontStyle: "italic",
						}}
					>
						F.U.N.
					</span>
					Stuff!
				</h1>

				<div className="flex flex-col items-end justify-center space-y-4 mt-20">
					<Link href="/game-of-life" className="text-xl">
						<h2>Conway&apos;s Game of Life &rarr;</h2>
					</Link>
					<Link href="/path-finder" className="text-xl pointer-events-none opacity-50">
						<h2>Path Finder &rarr;</h2>
					</Link>
					<Link href="/mastermind" className="text-xl pointer-events-none opacity-50">
						<h2>Mastermind &rarr;</h2>
					</Link>
					<Link
						href="https://task-planner.yafa.app"
						className="text-xl"
					>
						<h2>Task Planner &rarr;</h2>
					</Link>
				</div>
			</main>

			<footer></footer>
		</div>
	);
}
