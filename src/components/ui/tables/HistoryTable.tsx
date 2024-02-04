const workouts = [
	{
		date: "2022-01-01",
		reps: 10,
		weight: "70kg",
		e1rm: "100kg",
	},
	{
		date: "2022-01-02",
		reps: 12,
		weight: "75kg",
		e1rm: "105kg",
	},
	{
		date: "2022-01-03",
		reps: 8,
		weight: "80kg",
		e1rm: "110kg",
	},
	// Add more workouts as needed
];

export function HistoryTable() {
	return (
		<div className="mt-1 flow-root">
			<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
					<table className="min-w-full divide-y divide-gray-300">
						<thead>
							<tr>
								<th
									scope="col"
									className="w-full py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
								>
									Date
								</th>
								<th
									scope="col"
									className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Reps
								</th>
								<th
									scope="col"
									className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Weight
								</th>
								<th
									scope="col"
									className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									E1RM
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200">
							{workouts.map((workout) => (
								<tr key={workout.date}>
									<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
										{workout.date}
									</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{workout.reps}
									</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{workout.weight}
									</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{workout.e1rm}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
