import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import TextInput from "../text-input/TextInput";

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	onExerciseCreate: (name: string) => void;
}

export default function ExerciseModal({
	isOpen,
	setIsOpen,
	onExerciseCreate,
}: Props) {
	const [exerciseName, setExerciseName] = useState("");

	function closeModal() {
		setIsOpen(false);
		onExerciseCreate(exerciseName);
		setExerciseName("");
	}

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							{/*  */}
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-gray-900"
								>
									New Exercise
								</Dialog.Title>
								<div className="flex flex-col space-y-5 mt-5">
									<TextInput
										label="Name"
										onTextChange={(value) =>
											setExerciseName(value)
										}
										onKeyUp={(e) => {
											if (e.key === "Enter") {
												closeModal();
											}
										}}
									/>
									{/* <Selection
										options={[{ id: "1", name: "10" }]}
										onSelectionChange={() =>
											console.log("RPE")
										}
										label="RPE"
										showPlaceholder={false}
										backgroundColor="bg-white"
										className="w-20"
									/> */}
								</div>

								<div className="flex justify-end mt-4">
									<button
										type="button"
										className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200"
										onClick={closeModal}
									>
										Create Exercise
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
