export function roundToOneDecimal(n: number) {
	return Math.round(n * 10) / 10;
}

export function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}
