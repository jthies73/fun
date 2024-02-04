"use client";

import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

import { classNames } from "@/lib/utils";

interface Option {
	id: string;
	name: string;
}

interface Props {
	options: Option[];
	onSelectionChange: (option: Option) => void;
	label?: string;
	className?: string;
}

export default function Selection({
	options,
	onSelectionChange,
	label,
	className = "",
}: Props) {
	const [selected, setSelected] = useState<Option>(options?.[0]);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={classNames("flex flex-col", className)}>
			<Listbox
				value={selected}
				onChange={(option) => {
					setSelected(option);
					onSelectionChange(option);
					setIsOpen(false);
				}}
			>
				<Listbox.Button
					className={classNames(
						"relative z-0 text-left py-4 px-5 rounded-md ring-1 ring-inset ring-gray-300",
						selected ? "text-gray-900" : "text-gray-400"
					)}
				>
					{selected ? selected.name : "Select " + label}
					<label htmlFor="name" className="custom-label">
						{label}
					</label>
					<span className="pointer-events-none absolute flex items-center inset-y-0 right-2 pr-2">
						{/* TODO: Fix this (Headlessui dows not allow to keep element visible) */}
						{/* <Transition
							show={isOpen}
							className={"z-10"}
							enter={"transition duration-500"}
							enterFrom={"rotate-0"}
							enterTo={"rotate-180"}
							leave={"transition duration-500"}
							leaveFrom={"rotate-180"}
							leaveTo={"rotate-0"}
							unmount={false}
						> */}
						<ChevronDownIcon
							className="h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
						{/* </Transition> */}
					</span>
				</Listbox.Button>

				<Transition
					show={isOpen}
					className={"z-10"}
					enter={"transition ease-out duration-100"}
					enterFrom={"opacity-0 scale-95"}
					enterTo={"opacity-100 scale-100"}
					leave={"transition ease-in duration-75"}
					leaveFrom={"opacity-100 scale-100"}
					leaveTo={"opacity-0 scale-95"}
				>
					<Listbox.Options className="absolute mt-1 max-h-100 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 bg-white ring-black/5">
						{options.map((option) => (
							<Listbox.Option
								key={option.id}
								value={option}
								className={({ active }) =>
									`relative cursor-pointer select-none py-2 pl-5 pr-5 ${
										active
											? "bg-gray-200 text-gray-900"
											: "text-gray-900"
									}`
								}
							>
								{option.name}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</Listbox>
		</div>
	);
}
