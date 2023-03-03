export function average(...data: number[]): number;
export function average(data: number[]): number;
export function average(...args: [number[]] | number[]) {
	const data = args.flat();
	return data.reduce((previous, current) => previous + current) / data.length;
}
