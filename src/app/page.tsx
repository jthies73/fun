"use client";

import { useState } from "react";

import { DefaultButton } from "@/components/ui/button/DefaultButton";
import { HeaderWithMenu } from "@/components/ui/header/HeaderWithMenu";
import { IconAdd } from "@/components/ui/icon/IconAdd";
import { IconRefresh } from "@/components/ui/icon/IconRefresh";
import ExerciseModal from "@/components/ui/modal/ExerciseModal";
import { FatigueSelection } from "@/components/ui/selection/FatigueSelection";
import Selection from "@/components/ui/selection/Selection";
import { HistoryTable } from "@/components/ui/tables/HistoryTable";
import TextInput from "@/components/ui/text-input/TextInput";

export default function Root() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<HeaderWithMenu />
			<main className="">
				<div className="flex px-5 pt-5 mb-5 space-y-5 flex-col">
					{/* Exercise Row */}
					<div className="flex space-x-1 items-end">
						<Selection
							className="flex-1"
							options={[
								{ id: "1", name: "Benchpress" },
								{ id: "2", name: "Military" },
								{ id: "3", name: "Squats" },
							]}
							label="Exercise"
							onSelectionChange={(selection) => {
								console.log(selection);
							}}
						/>
						<DefaultButton
							onClick={() => setIsOpen(true)}
							className="bg-slate-200"
							icon={IconAdd}
							text="Add"
						/>
					</div>
					{/* E1RM Row */}
					<div className="flex justify-between space-x-1 items-stretch">
						<TextInput
							className="flex-1"
							onTextChange={(value) => console.log(value)}
							label="e1rm"
							unit="kg"
						/>
						<DefaultButton
							onClick={(e) =>
								console.log(e.clientY + " / " + e.clientX)
							}
							className="bg-slate-200"
							text="-5"
						/>
						<DefaultButton
							onClick={(e) =>
								console.log(e.clientY + " / " + e.clientX)
							}
							className="bg-slate-200"
							text="-1"
						/>
						<DefaultButton
							onClick={(e) =>
								console.log(e.clientY + " / " + e.clientX)
							}
							className="bg-slate-200"
							text="+1"
						/>
						<DefaultButton
							onClick={(e) =>
								console.log(e.clientY + " / " + e.clientX)
							}
							className="bg-slate-200"
							text="+5"
						/>
					</div>
					{/* Fatigue */}
					<FatigueSelection
						onSelectionChange={(value) => {
							console.log("Selected: ", value);
						}}
					/>
					<div></div>
				</div>
				{/* White area */}
				<div className="mt-5 p-5 bg-white">
					<div className="flex flex-col space-y-5">
						<div className="flex space-x-5 items-end justify-center">
							<TextInput
								onTextChange={() => console.log("REPS")}
								label="REPS"
								backgroundColor="bg-white"
								className="w-20"
							/>
							<div className="self-center">@</div>
							<Selection
								options={[{ id: "1", name: "10" }]}
								onSelectionChange={() => console.log("RPE")}
								label="RPE"
								className="w-20"
							/>
						</div>
						<div className="flex justify-center">
							<IconRefresh
								onClick={() => console.log("Refresh")}
								className="hover:cursor-pointer active:scale-90"
							/>
							<TextInput
								onTextChange={() => console.log("KG")}
								label="KG"
								backgroundColor="bg-white"
								className="w-20"
							/>
						</div>
						<div className="flex justify-center">
							<DefaultButton
								onClick={() => console.log("finish set")}
								text="Finish Set"
								className="flex-1 bg-slate-200"
							/>
						</div>
					</div>
				</div>
				<div className="flex px-5 mb-5 space-y-5 flex-col bg-light">
					<HistoryTable />
				</div>
			</main>
			<ExerciseModal
				onExerciseCreate={(name) => console.log(name)}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
		</>
	);
}
