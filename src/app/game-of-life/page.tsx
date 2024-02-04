"use client";

import React, { useEffect, useState } from "react";

import { classNames } from "@/lib/utils";

export default function Page() {
	const [grid, setGrid] = useState<Array<Array<boolean>>>([]);
	const [lastCellClicked, setLastCellClicked] = useState<Array<number>>([]);

	useEffect(() => {
		// Create the grid
		const rows = 50;
		const cols = 50;
		const grid = Array.from({ length: rows }, () =>
			Array.from({ length: cols }, () => false)
		);
		setGrid(grid);
	}, []);

	const toggleField = (i: number, j: number) => () => {
		console.log("toggleField", i, j);
		const newGrid = grid.map((row, rowIdx) =>
			row.map((col, colIdx) => {
				if (rowIdx === i && colIdx === j) {
					return !col;
				}
				return col;
			})
		);
		setGrid(newGrid);
		setLastCellClicked([i, j]);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-blue-500">
			{grid.map((row, i) => (
				<div key={i}>
					{row.map((col, j) => (
						<div
							key={j}
							className={classNames(
								"w-5 h-5 bg-gray-300 border border-gray-400 cursor-pointer drag",
								col ? "bg-black" : ""
							)}
							onClick={() => {
								console.log("click", i, j);
								if (
									lastCellClicked[0] === i &&
									lastCellClicked[1] === j
								)
									return;
								else toggleField(i, j);
							}}
							onDragOver={() => {
								if (
									lastCellClicked[0] === i &&
									lastCellClicked[1] === j
								)
									return;
								else toggleField(i, j);
							}}
						/>
					))}
				</div>
			))}
		</div>
	);
}
