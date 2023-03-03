export function range(...data: number[]): number;
export function range(data: number[]): number;
export function range(...args: [number[]] | number[]) {
	const data = args.flat();
	return Math.max(...data) - Math.min(...data);
}
