export function median(...data: number[]): number;
export function median(data: number[]): number;
export function median(...args: [number[]] | number[]) {
	const data = args.flat().sort();

	const midpoint = Math.floor(data.length / 2);

	return data.length % 2 === 0
		? (data[midpoint - 1]! + data[midpoint]!) / 2
		: data[midpoint];
}
